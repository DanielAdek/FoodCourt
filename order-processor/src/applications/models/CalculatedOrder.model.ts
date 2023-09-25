import { Model } from 'objection';
import AddressDetails from './AddressDetails.model';

class CalculatedOrder extends Model {
  static tableName = 'calculated_orders';

  static get relationMappings() {
    return {
      addressDetails: {
        relation: Model.BelongsToOneRelation,
        modelClass: AddressDetails,
        join: {
          from: 'calculated_orders.address_details_id',
          to: 'address_details.id'
        }
      }
      // Add other relations as needed
    };
  }
}

export default CalculatedOrder;
