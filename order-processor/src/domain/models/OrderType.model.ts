// src/models/OrderType.model.ts

import { Model } from 'objection';

class OrderType extends Model {
  static tableName = 'order_types';
}

export default OrderType;
