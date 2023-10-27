import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import { OrderLogService } from '../services/order-log.service';
import {OrderLogType} from "../assets/interface/order-log.interface";
import {CreateOrderLogDto} from "../assets/dtos/order-log.dto";

@ApiTags("Order Logs")
@Controller('order-log')
export class OrderLogController {
  constructor(private readonly orderLogService: OrderLogService) {}

  @Post()
  public async create(@Body() data: CreateOrderLogDto): Promise<OrderLogType> {
    return this.orderLogService.create(data);
  }

  @Get(':id')
  public async findOne(@Param('id') id: number): Promise<OrderLogType> {
    return this.orderLogService.findOne(id);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() data): Promise<OrderLogType> {
    return this.orderLogService.update(id, data);
  }

  @Delete(':id')
  public async remove(@Param('id') id: number): Promise<void> {
    return this.orderLogService.remove(id);
  }

  @Get()
  public async findAll(): Promise<OrderLogType[]> {
    return this.orderLogService.findAll();
  }
}
