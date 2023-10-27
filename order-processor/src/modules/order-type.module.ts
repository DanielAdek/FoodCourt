import {Module} from "@nestjs/common";
import {OrderTypeService} from "../applications/services/order-type.service";
import {OrderTypeController} from "../applications/controllers/order-type.controller";

@Module({
    providers: [OrderTypeService],
    controllers: [OrderTypeController]
})
export class OrderTypeModule {}