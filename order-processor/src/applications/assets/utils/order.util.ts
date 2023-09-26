import Order from '../../models/Order.model';

export function calculateTotalOrderAmount(order: Order): number {
  let totalAmount = 0;

  // Calculate the total amount of meals in the order
  if (order.meals && order.meals.length > 0) {
    totalAmount += order.meals.reduce((sum, meal) => sum + parseFloat(meal.amount), 0);
  }

  // Calculate the total amount of addons in the order
  if (order.addons && order.addons.length > 0) {
    totalAmount += order.addons.reduce((sum, addon) => sum + parseFloat(addon.amount), 0);
  }

  // Add delivery fee if applicable
  if (order.calculatedOrder && order.calculatedOrder.deliveryFee) {
    totalAmount += parseFloat(order.calculatedOrder.deliveryFee);
  }

  return totalAmount;
}
