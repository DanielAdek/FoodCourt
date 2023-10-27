// src/dtos/create-order-log.dto.ts

import {IsString, IsNotEmpty, IsDate, IsOptional} from 'class-validator';

export class CreateOrderLogDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  @IsNotEmpty()
  time: Date;
}


export class UpdateOrderLogDto {
  @IsString()
  @IsOptional()
  description?: string;

  @IsDate()
  @IsOptional()
  time?: Date;
}
