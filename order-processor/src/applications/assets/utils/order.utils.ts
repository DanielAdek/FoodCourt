import {IOrderResponse} from "../interface/order.interface";
import {MealType} from "../interface/meal.interface";
import {AddonsType} from "../interface/addons.interface";

export function calculateTotalOrderAmount(order: IOrderResponse): number {
  let totalAmount = 0;

  // Calculate the total amount of meals in the order
  if (order.calculated_order && order.calculated_order.meals && order.calculated_order.meals.length > 0) {
    totalAmount += order.calculated_order.meals.reduce((sum, meal: MealType) => sum + parseFloat(meal.amount), 0);
  }

  // Calculate the total amount of addons in the order
  if (order.calculated_order?.meals?.length) {
    for (const meal of order.calculated_order?.meals) {
      totalAmount += meal.addons.reduce((sum, addon: AddonsType) => sum + parseFloat(addon.amount), 0);
    }
  }

  // Add delivery fee if applicable
  if (order.calculated_order && order.calculated_order.delivery_fee) {
    totalAmount += parseFloat(order.calculated_order.delivery_fee);
  }

  return totalAmount;
}
