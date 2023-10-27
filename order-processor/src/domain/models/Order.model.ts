import { Model } from 'objection';
import OrderLog from './OrderLog.model';
import CalculatedOrder from './CalculatedOrder.model';
import Meal from './Meal.model';
import Addon from './Addon.model';
import Brand from './Brand.model';
import OrderType from './OrderType.model';

export class Order extends Model {
  static tableName = 'orders';

  static get relationMappings() {
    return {
      logs: {
        relation: Model.HasManyRelation,
        modelClass: OrderLog,
        join: {
          from: 'orders.id',
          to: 'order_logs.order_id'
        }
      },
      calculatedOrder: {
        relation: Model.BelongsToOneRelation,
        modelClass: CalculatedOrder,
        join: {
          from: 'orders.calculated_order_id',
          to: 'calculated_orders.id'
        }
      },
      meal: {
        relation: Model.ManyToManyRelation,
        modelClass: Meal,
        join: {
          from: 'orders.id',
          through: {
            from: 'order_meals.order_id',
            to: 'order_meals.meal_id'
          },
          to: 'meals.id'
        }
      },
      addon: {
        relation: Model.ManyToManyRelation,
        modelClass: Addon,
        join: {
          from: 'orders.id',
          through: {
            from: 'order_addons.order_id',
            to: 'order_addons.addon_id'
          },
          to: 'addons.id'
        }
      },
      brand: {
        relation: Model.BelongsToOneRelation,
        modelClass: Brand,
        join: {
          from: 'orders.brand_id',
          to: 'brands.id'
        }
      },
      orderType: {
        relation: Model.BelongsToOneRelation,
        modelClass: OrderType,
        join: {
          from: 'orders.order_type_id',
          to: 'order_types.id'
        }
      }
    };
  }
}

