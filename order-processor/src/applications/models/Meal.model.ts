import { Model } from 'objection';
import Brand from './Brand.model';

class Meal extends Model {
  static tableName = 'meals';

  static get relationMappings() {
    return {
      brand: {
        relation: Model.BelongsToOneRelation,
        modelClass: Brand,
        join: {
          from: 'meals.brand_id',
          to: 'brands.id'
        }
      }
      // Add other relations as needed
    };
  }
}

export default Meal;
