import { Module } from '@nestjs/common';
import { OrdersController } from '../applications/controllers/orders.controller';
import { OrdersService } from '../applications/services/orders.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
