import {Module} from "@nestjs/common";
import {CalculatedOrderService} from "../applications/services/calculated-order.service";
import {CalculatedOrderController} from "../applications/controllers/calculated-order.controller";

@Module({
    providers: [CalculatedOrderService],
    controllers: [CalculatedOrderController]
})
export class CalcOrderModule {}