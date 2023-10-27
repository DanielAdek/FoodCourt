import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import { OrderTypeService } from '../services/order-type.service';
import {TypeOrderType} from "../assets/interface/order-type.interface";
import {CreateOrderTypeDto} from "../assets/dtos/order-type.dto";

@ApiTags("Order Types")
@Controller('order-type')
export class OrderTypeController {
  constructor(private readonly orderTypeService: OrderTypeService) {}

  @Post()
  public async create(@Body() data: CreateOrderTypeDto): Promise<TypeOrderType> {
    return this.orderTypeService.create(data);
  }

  @Get(':id')
  public async findOne(@Param('id') id: number): Promise<TypeOrderType> {
    return this.orderTypeService.findOne(id);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() data): Promise<TypeOrderType> {
    return this.orderTypeService.update(id, data);
  }

  @Delete(':id')
  public async remove(@Param('id') id: number): Promise<void> {
    return this.orderTypeService.remove(id);
  }

  @Get()
  public async findAll(): Promise<TypeOrderType[]> {
    return this.orderTypeService.findAll();
  }
}
