import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import { MealsService } from '../services/meals.service';
import {MealDto} from "../assets/dtos/meals.dto";
import {MealType} from "../assets/interface/meal.interface";

@ApiTags("Meals")
@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Post()
  public async create(@Body() data: MealDto): Promise<MealType> {
    return this.mealsService.create(data);
  }

  @Get(':id')
  public async findOne(@Param('id') id: number): Promise<MealType> {
    return this.mealsService.findOne(id);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() data): Promise<MealType> {
    return this.mealsService.update(id, data);
  }

  @Delete(':id')
  public async remove(@Param('id') id: number): Promise<void> {
    return this.mealsService.remove(id);
  }

  @Get()
  public async findAll(): Promise<MealType[]> {
    return this.mealsService.findAll();
  }
}
