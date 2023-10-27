import {Module} from "@nestjs/common";
import {OrderLogService} from "../applications/services/order-log.service";
import {OrderLogController} from "../applications/controllers/order-log.controller";

@Module({
    providers: [OrderLogService],
    controllers: [OrderLogController]
})
export class OrderLogsModule {}