import {IsNotEmpty, IsNumber} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class OrderDto {
  @IsNumber()
  readonly id: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'user_id is required' })
  readonly user_id: string;
}
