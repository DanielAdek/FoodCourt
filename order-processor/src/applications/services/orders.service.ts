import {BadRequestException, Inject, Injectable, NotFoundException} from '@nestjs/common';
import Objection, {ModelClass} from "objection";
import {Order} from '../../domain/models/Order.model';
import OrderLog from "../../domain/models/OrderLog.model";
import { calculateTotalOrderAmount } from '../assets/utils/order.utils';
import {IOrderResponse} from "../assets/interface/order.interface";
import OrderType from "../../domain/models/OrderType.model";

@Injectable()
export class OrdersService {

  constructor(
      @Inject("Order") private readonly OrderClass: ModelClass<Order>
  ) {}
  public async create(data): Promise<Order> {
    return this.OrderClass.query().insert(data);
  }

  public async findOne(id: number): Promise<Order> {
    return this.OrderClass.query().findById(id);
  }

  public async update(id: number, data): Promise<Order> {
    return this.OrderClass.query().patchAndFetchById(id, data);
  }

  public async remove(id: number): Promise<void> {
     await Order.query().deleteById(id);
  }

  public async findAll(query: { limit: number, page: number }): Promise<Objection.Page<OrderType>> {
    return this.OrderClass.query().page(query.page, query.limit);
  }

  private async processOrder(orderId: number): Promise<IOrderResponse> {
    // Find the order
    const order: IOrderResponse = <unknown>await this.OrderClass.query().findById(orderId) as IOrderResponse;

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
