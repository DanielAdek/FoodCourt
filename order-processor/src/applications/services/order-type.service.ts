import {Inject, Injectable} from '@nestjs/common';
import {ModelClass} from "objection";
import OrderType from '../../domain/models/OrderType.model';
import {TypeOrderType} from "../assets/interface/order-type.interface";

@Injectable()
export class OrderTypeService {
  constructor(@Inject("OrderType") private readonly OrderTypeClass: ModelClass<OrderType>) {}

  public async create(data): Promise<TypeOrderType> {
    return <unknown>await OrderType.query().insert(data) as TypeOrderType;
  }

  public async findOne(id: number): Promise<TypeOrderType> {
    return <unknown>await this.OrderTypeClass.query().findById(id) as TypeOrderType;
  }

  public async update(id: number, data): Promise<TypeOrderType> {
    return <unknown>await this.OrderTypeClass.query().patchAndFetchById(id, data) as TypeOrderType;
  }

  public async remove(id: number): Promise<void> {
    await OrderType.query().deleteById(id);
  }

  public async findAll(): Promise<TypeOrderType[]> {
    return <unknown>await OrderType.query() as TypeOrderType[];
  }
}
