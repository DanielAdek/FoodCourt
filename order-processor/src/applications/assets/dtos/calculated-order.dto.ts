import { IsBoolean, IsNumber, IsNotEmpty, IsString } from 'class-validator';
import {PartialType} from "@nestjs/swagger";

export class CreateCalculatedOrderDto {
  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;

  @IsBoolean()
  @IsNotEmpty()
  freeDelivery: boolean;

  @IsNumber()
  @IsNotEmpty()
  deliveryFee: number;

  @IsNumber()
  @IsNotEmpty()
  serviceCharge: number;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  addressLine: string;

  @IsString()
  @IsNotEmpty()
  buildingNumber: string;
}


export class UpdateCalculatedOrderDto extends PartialType(CreateCalculatedOrderDto) {}
