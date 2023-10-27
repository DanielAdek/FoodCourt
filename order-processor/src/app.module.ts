import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import {AppService} from './app.service';
import {OrdersModule} from "./modules/orders.module";
import {DatabaseModule} from "./modules/database.module";
import {AddonModule} from "./modules/addon.module";
import {BrandModule} from "./modules/brand.module";
import {MealsModule} from "./modules/meals.module";
import {CalcOrderModule} from "./modules/calc-order.module";
import {AddressModule} from "./modules/address.module";
import {OrderLogsModule} from "./modules/order-logs.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    OrdersModule,
    BrandModule,
    MealsModule,
    CalcOrderModule,
    AddressModule,
    OrderLogsModule,
    OrdersModule,
    AddonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
