import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsPhoneNumber, IsString} from "class-validator";

export class AddressDetailsDto {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty({ message: "Customer name is required"})
    customer_name: string;

    @ApiProperty()
    @IsString()
    city: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({ message: "Address line is required"})
    address_line: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty({message: "Building number is required"})
    building_name: string;

    @ApiProperty()
    @IsPhoneNumber()
    @IsNotEmpty({message: "Phone number is required"})
    mobile_no: string;

    @ApiProperty()
    lat: number;

    @ApiProperty()
    lng: number;
}