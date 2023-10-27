import { IsString, IsNotEmpty } from 'class-validator';
import {ApiProperty, PartialType} from "@nestjs/swagger";

export class BrandDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}


export class UpdateBrandDto extends PartialType(BrandDto) {}
