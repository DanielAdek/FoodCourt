import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import { CalculatedOrderService } from '../services/calculated-order.service';
import {CalculatedOrderType} from "../assets/interface/calculated-order.interface";
import {CreateCalculatedOrderDto} from "../assets/dtos/calculated-order.dto";

@ApiTags("Calculated Order")
@Controller('calculated-order')
export class CalculatedOrderController {
  constructor(private readonly calculatedOrderService: CalculatedOrderService) {}

  @Post()
  public async create(@Body() data: CreateCalculatedOrderDto): Promise<CalculatedOrderType> {
    return this.calculatedOrderService.create(data);
  }

  @Get(':id')
  public async findOne(@Param('id') id: number): Promise<CalculatedOrderType> {
    return this.calculatedOrderService.findOne(id);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() data): Promise<CalculatedOrderType> {
    return this.calculatedOrderService.update(id, data);
  }

  @Delete(':id')
  public async remove(@Param('id') id: number): Promise<void> {
    return this.calculatedOrderService.remove(id);
  }

  @Get()
  public async findAll(): Promise<CalculatedOrderType[]> {
    return this.calculatedOrderService.findAll();
  }
}
