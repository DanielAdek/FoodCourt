import {Inject, Injectable} from '@nestjs/common';
import {ModelClass} from "objection";
import AddonModel from "../../domain/models/Addon.model";
import {AddonDto} from "../assets/dtos/addon.dto";
import {AddonsType} from "../assets/interface/addons.interface";

@Injectable()
export class AddonService {
  constructor(
    @Inject('Addon') private readonly addonClass: ModelClass<AddonModel>
  ) {}

  public async create(payload: AddonDto): Promise<AddonsType> {
    return <unknown>await this.addonClass.query().insert(payload) as AddonsType;
  }
}