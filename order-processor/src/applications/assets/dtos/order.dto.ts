import {IsString, IsNotEmpty, IsBoolean, IsDate, IsNumber, IsOptional, IsObject, ValidateNested} from 'class-validator';
import {Type} from "class-transformer";
import {PartialType, ApiProperty, ApiBody} from "@nestjs/swagger";
import {AddonDto} from "./addon.dto";

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  orderCode: string;

  @IsBoolean()
  completed: boolean;

  @IsBoolean()
  cancelled: boolean;

  @IsBoolean()
  kitchenCancelled: boolean;

  @IsBoolean()
  kitchenAccepted: boolean;

  @IsBoolean()
  kitchenDispatched: boolean;

  @IsDate()
  kitchenDispatchedTime: Date;

  @IsDate()
  completedTime: Date;

  @ApiProperty()
  @IsNumber()
  riderId: number;

  @IsBoolean()
  kitchenPrepared: boolean;

  @IsBoolean()
  riderAssigned: boolean;

  @ApiProperty()
  @IsBoolean()
  paid: boolean;

  @IsString()
  orderChange: string;

  @IsNumber()
  calculatedOrderId: number;

  @IsString()
  createdAt: string;

  @IsString()
  updatedAt: string;

  @ApiProperty()
  @IsNumber()
  shopAccepted: number;

  @IsNumber()
  shopPrepared: number;

  @ApiProperty()
  @IsNumber()
  noOfMealbagsDelivered: number;

  @ApiProperty()
  @IsNumber()
  noOfDrinksDelivered: number;

  @IsBoolean()
  riderStarted: boolean;

  @IsBoolean()
  riderArrived: boolean;

  @IsBoolean()
  isFailedTrip: boolean;

  @IsObject()
  failedTripDetails: object;

  @ApiProperty()
  @IsString()
  boxNumber: string;

  @ApiProperty()
  @IsString()
  shelfId: string;

  @ApiProperty()
  @IsObject()
  scheduledDeliveryDate: object;

  @ApiProperty()
  @IsString()
  scheduledDeliveryTime: string;

  @IsBoolean()
  isHidden: boolean;

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => AddonDto)
  addons: AddonDto[];
}


export class UpdateOrderDto extends PartialType(AddonDto) {}
