import {BrandType} from "./brand.interface";
import {IAddons} from "./addons.interface";

export type MealType = {
  id: number;
  amount: string;
  new: boolean;
  name: string;
  active: boolean;
  internal_profit: number;
  brand_id: number;
  item_type: string;
}

export interface IMealResponse extends MealType {
  brand: BrandType;
  meals: MealType[];
  addons: IAddons[]
}