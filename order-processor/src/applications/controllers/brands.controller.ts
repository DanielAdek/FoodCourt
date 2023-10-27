import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import { BrandService } from '../services/brand.service';
import {BrandDto} from "../assets/dtos/brand.dto";
import {BrandType} from "../assets/interface/brand.interface";

ApiTags("Brand")
@Controller('/brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  public async create(@Body() data: BrandDto): Promise<BrandType> {
    return await this.brandService.create(data);
  }

  @Get(':id')
  public async findOne(@Param('id') id: number): Promise<BrandType> {
    return await this.brandService.findOne(id);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() data): Promise<BrandType> {
    return this.brandService.update(id, data);
  }

  @Delete(':id')
  public async remove(@Param('id') id: number): Promise<void> {
    return this.brandService.remove(id);
  }

  @Get()
  public async findAll(): Promise<BrandType[]> {
    return this.brandService.findAll();
  }
}
