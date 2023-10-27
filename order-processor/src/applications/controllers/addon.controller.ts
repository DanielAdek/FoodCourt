import {Body, Controller, Post} from '@nestjs/common';
import {AddonService} from "../services/addons.service";
import {AddonDto} from "../assets/dtos/addon.dto";
import {AddonsType} from "../assets/interface/addons.interface";
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Addons")
@Controller("/addons")
export class AddonController {
  constructor(private readonly service: AddonService) {}

  @Post("/create")
  public create(@Body() payload: AddonDto): Promise<AddonsType> {
    return this.service.create(payload);
  }
}