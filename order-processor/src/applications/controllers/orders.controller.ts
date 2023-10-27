import {Controller, Get, Post, Put, Delete, Param, Body, Query, UsePipes} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import Objection from "objection";
import { OrdersService } from '../services/orders.service';
import {JoiValidationPipe} from "../assets/pipes/Joi-validation.pipe";
import {createOrderSchema, updateOrderSchema} from "../assets/validation/Joi-schema.validation";
import {CreateOrderDto} from "../assets/dtos/order.dto";
import OrderType from "../../domain/models/OrderType.model";

@ApiTags("Orders")
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post()
  @UsePipes(new JoiValidationPipe(createOrderSchema))
  public async create(@Body() data: CreateOrderDto): Promise<OrderType> {
    return this.ordersService.create(data);
  }

  @Get(':id')
  public async findOne(@Param('id') id: number): Promise<OrderType> {
    return this.ordersService.findOne(id);
  }

  @Put(':id')
  @UsePipes(new JoiValidationPipe(updateOrderSchema))
  public async update(@Param('id') id: number, @Body() data): Promise<OrderType> {
    return this.ordersService.update(id, data);
  }

  @Delete(':id')
  public async remove(@Param('id') id: number): Promise<void> {
    return this.ordersService.remove(id);
  }

  @Get()
  public async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10
  ): Promise<Objection.Page<OrderType>> {
    return this.ordersService.findAll({page, limit});
  }
}