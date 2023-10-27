import {Inject, Injectable} from '@nestjs/common';
import {ModelClass} from "objection";
import Brand from '../../domain/models/Brand.model';
import {BrandDto} from "../assets/dtos/brand.dto";
import {BrandType} from "../assets/interface/brand.interface";

@Injectable()
export class BrandService {
  constructor(@Inject("Brand") private readonly BrandClass: ModelClass<Brand>) {}

  public async create(data: BrandDto): Promise<BrandType> {
    return <unknown>this.BrandClass.query().insert(data) as BrandType;
  }

  public async findOne(id: number): Promise<BrandType> {
    return <unknown>this.BrandClass.query().findById(id) as BrandType;
  }

  public async update(id: number, data): Promise<BrandType> {
    return <unknown> this.BrandClass.query().patchAndFetchById(id, data) as BrandType;
  }

  public async remove(id: number): Promise<void> {
    await this.BrandClass.query().deleteById(id);
  }

  public async findAll(): Promise<BrandType[]> {
    return <unknown>this.BrandClass.query() as BrandType[];
  }
}
