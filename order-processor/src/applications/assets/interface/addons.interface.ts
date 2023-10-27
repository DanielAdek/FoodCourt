import {MealType} from "./meal.interface";

export type AddonsType = {
  id: number;
  amount: string;
  meal_id: number;
  meal_addon_id: number;
  internal_profit: number;
  min_selection_number: number;
  meal_addon_category_id: number;
  quantity: number;
  created_at: Date;
  updated_at: Date;
}

export interface IAddons extends AddonsType {
  meal_data: MealType
}