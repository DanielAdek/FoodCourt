import { IsString, IsNotEmpty } from 'class-validator';
import {PartialType} from "@nestjs/swagger";

export class CreateOrderTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateOrderTypeDto extends PartialType(CreateOrderTypeDto) {}
