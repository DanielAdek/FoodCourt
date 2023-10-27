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
          from: 'meals.brandId',
          to: 'brands.id'
        }
      }
    };
  }
}

export default Meal;
