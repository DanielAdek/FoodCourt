import {Module} from "@nestjs/common";
import {MealsService} from "../applications/services/meals.service";
import {MealsController} from "../applications/controllers/meals.controller";

@Module({
    providers: [MealsService],
    controllers: [MealsController]
})
export class MealsModule {}