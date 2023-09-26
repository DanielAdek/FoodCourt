import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import Order from '../models/Order.model';
import OrderLog from "../models/OrderLog.model";
import { calculateTotalOrderAmount } from '../assets/utils';

@Injectable()
export class OrdersService {
  public async create(data): Promise<Order> {
    return Order.query().insert(data);
  }

  public async findOne(id: number): Promise<Order> {
    return Order.query().findById(id);
  }

  public async update(id: number, data): Promise<Order> {
    return  Order.query().patchAndFetchById(id, data);
  }

  public async remove(id: number): Promise<void> {
     await Order.query().deleteById(id);
  }

  public async findAll(query: PaginateQuery): Promise<Paginated<Order>> {
    const queryBuilder = Order.query();
    return paginate<Order>(query, queryBuilder, { defaultLimit: 10 });
  }

  private async processOrder(orderId: number): Promise<Order> {
    // Find the order
    const order = await Order.query().findById(orderId);

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    // Validate order status
    if (order.completed || order.cancelled || order.kitchenCancelled) {
      throw new BadRequestException('Invalid order status for processing');
    }

    // Check kitchen processes
    if (!order.kitchenAccepted || !order.kitchenPrepared || !order.kitchenDispatched) {
      throw new BadRequestException('Order cannot be processed as kitchen processes are incomplete');
    }

    // Calculate total order amount including addons
    const totalAmount = calculateTotalOrderAmount(order);

    // Update order status and total amount
    await Order.query().patchAndFetchById(orderId, { completed: true, orderTotalAmount: totalAmount });

    // Log the order status update
    await OrderLog.query().insert({
      orderId,
      description: 'Order processed',
    });

    return order;
  }
}
