// src/models/AddressDetails.model.ts

import { Model } from 'objection';

class AddressDetails extends Model {
  static tableName = 'address_details';

  static get relationMappings() {
    return {
      // Define any relations as needed
    };
  }
}

export default AddressDetails;
