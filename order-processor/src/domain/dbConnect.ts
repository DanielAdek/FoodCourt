import Knex from 'knex';
import {knexSnakeCaseMappers, Model} from 'objection';
import {Order} from './models/Order.model';
import Brand from "./models/Brand.model";
import Meal from "./models/Meal.model";
import CalculatedOrderModel from "./models/CalculatedOrder.model";
import OrderLogModel from "./models/OrderLog.model";
import OrderTypeModel from "./models/OrderType.model";
import AddonModel from "./models/Addon.model";

const models = [
    Order, Brand, Meal, CalculatedOrderModel,
  OrderLogModel, OrderTypeModel, AddonModel,
];

const modelProviders = models.map((model) => {
  return {
    provide: model.name,
    useValue: model,
  };
});

export const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async () => {
      const knex = Knex({
        client: 'pg',
        connection: process.env.DATABASE_URL,
        debug: process.env.KNEX_DEBUG === 'true',
        ...knexSnakeCaseMappers(),
      });

      Model.knex(knex);
      return knex;
    },
  },
];
