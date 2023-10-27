import {ICalculatedOrder} from "./calculated-order.interface";
import {ITypeOrderType} from "./order-type.interface";

export type IOrderType = {
  id: string;
  completed: boolean;
  cancelled: boolean;
  kitchen_cancelled: boolean;
  kitchen_accepted: boolean;
  kitchen_dispatched: boolean;
  kitchenCancelled: boolean;
  kitchenAccepted: boolean;
  kitchenDispatched: boolean;
  kitchenPrepared: boolean;
  kitchen_dispatched_time: Date;
  completed_time: Date;
  rider_id: number;
  kitchen_prepared: boolean;
  rider_assigned: boolean;
  paid: boolean;
  order_code: string;
  order_change: boolean;
  order_type_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IOrderResponse extends IOrderType {
  calculated_order: ICalculatedOrder;
  order_type: ITypeOrderType;
}