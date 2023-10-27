import {IsNumber, IsNotEmpty, IsString, IsBoolean} from 'class-validator';
import {ApiProperty, PartialType} from "@nestjs/swagger";

export class AddonDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  meal_id: string;


  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNumber()
  min_selection_no: number;

  @ApiProperty()
  @IsNumber()
  meal_addon_id: number;

  @ApiProperty()
  @IsNumber()
  meal_addon_category_id: number;

  @ApiProperty()
  @IsNumber()
  internal_profit: number;

  @ApiProperty()
  @IsBoolean()
  is_combo: boolean;
}


export class UpdateAddonDto extends PartialType(AddonDto) {}
