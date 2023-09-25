import {IsNotEmpty, IsString, IsNumber, IsArray, ValidateNested} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class OrderDto {
  @IsNumber()
  readonly id: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'user_id is required' })
  readonly user_id: string;
}

class AddonDto {
  // Define properties for Addon DTO
}

export class CreateOrderDto {
  @IsString()
  // Define properties for CreateOrderDto
  // ...

  @IsArray()
  @ValidateNested({ each: true })
  addons: AddonDto[];
}
