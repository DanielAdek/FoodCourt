import { Model } from 'objection';
import {Order} from './Order.model';

class OrderLog extends Model {
  static tableName = 'order_logs';

  static get relationMappings() {
    return {
      order: {
        relation: Model.BelongsToOneRelation,
        modelClass: Order,
        join: {
          from: 'order_logs.order_id',
          to: 'orders.id'
        }
      }
    };
  }
}

export default OrderLog;
