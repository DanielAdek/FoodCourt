// src/models/Addon.model.ts

import { Model } from 'objection';
import Meal from './Meal.model';

class Addon extends Model {
  static tableName = 'addons';

  static get relationMappings() {
    return {
      meal: {
        relation: Model.BelongsToOneRelation,
        modelClass: Meal,
        join: {
          from: 'addons.meal_id',
          to: 'meals.id'
        }
      }
      // Add other relations as needed
    };
  }
}

export default Addon;
