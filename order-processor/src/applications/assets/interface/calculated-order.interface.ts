import {AddressDetailsType} from "./address-details.interface";
import {IMealResponse} from "./meal.interface";

export type CalculatedOrderType = {
    id: number;
    total_amount: number;
    free_delivery: boolean;
    delivery_fee: string;
    service_charge: number;
}


export interface ICalculatedOrder extends CalculatedOrderType {
    address_details: AddressDetailsType;
    meals: IMealResponse[]
}