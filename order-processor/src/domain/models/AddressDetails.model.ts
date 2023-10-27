import { Model } from 'objection';
import CalculatedOrder from "./CalculatedOrder.model";

class AddressDetails extends Model {
  static tableName = 'address_details';

  static get relationMappings() {
    return {
      calculatedOrder: {
        relation: Model.HasManyRelation,
        modelClass: CalculatedOrder,
        join: {
          from: 'address_details.id',
          to: 'calculated_orders.address_details_id'
        }
      }
    };
  }
}

export default AddressDetails;
