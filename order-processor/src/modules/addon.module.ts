import { Module } from '@nestjs/common';
import {AddonController} from "../applications/controllers/addon.controller";
import {AddonService} from "../applications/services/addons.service";

@Module({
    providers: [AddonService],
    controllers: [AddonController]
})
export class AddonModule {}
