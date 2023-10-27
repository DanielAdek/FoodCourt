import {IsString, IsNotEmpty, IsNumber, IsOptional, IsBoolean, IsDecimal} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class MealDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumber()
  brand_id: number;

  @ApiProperty()
  @IsDecimal()
  amount: number;

  @ApiProperty()
  @IsBoolean()
  new: boolean;

  @ApiProperty()
  @IsBoolean()
  active: string;

  @ApiProperty()
  @IsString()
  item_type: string;

  // @ApiProperty()
  // @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => AddonDto)
  // addons: AddonDto[];
}


export class UpdateMealDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  brandId?: number;

  @IsString()
  @IsOptional()
  description?: string;
}
