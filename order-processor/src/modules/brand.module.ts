import {Module} from "@nestjs/common";
import {BrandService} from "../applications/services/brand.service";
import {BrandController} from "../applications/controllers/brands.controller";

@Module({
    providers: [BrandService],
    controllers: [BrandController]
})
export class BrandModule {}