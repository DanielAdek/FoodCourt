import {IsNotEmpty, IsString, IsNumber, IsArray, ValidateNested, IsOptional, IsBoolean} from 'class-validator';
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
  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;

  @IsBoolean()
  @IsOptional()
  cancelled: boolean;

  @IsBoolean()
  @IsOptional()
  kitchenCancelled: boolean;

  // Add other properties as needed
  @IsArray()
  @ValidateNested({ each: true })
  addons: AddonDto[];
}
