// src/models/Brand.model.ts

import { Model } from 'objection';

class Brand extends Model {
  static tableName = 'brands';
}

export default Brand;
