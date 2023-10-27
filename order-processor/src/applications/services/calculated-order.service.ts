import {Inject, Injectable} from '@nestjs/common';
import {ModelClass} from "objection";
import CalculatedOrder from '../../domain/models/CalculatedOrder.model';
import {CalculatedOrderType} from "../assets/interface/calculated-order.interface";

@Injectable()
export class CalculatedOrderService {
  constructor(@Inject('CalculatedOrder') private readonly CalcOrderClass: ModelClass<CalculatedOrder>) {}
  public async create(data): Promise<CalculatedOrderType> {
    return <unknown>this.CalcOrderClass.query().insert(data) as CalculatedOrderType;
  }

  public async findOne(id: number): Promise<CalculatedOrderType> {
    return <unknown>await this.CalcOrderClass.query().findById(id) as CalculatedOrderType;
  }

  public async update(id: number, data): Promise<CalculatedOrderType> {
    return <unknown>await this.CalcOrderClass.query().patchAndFetchById(id, data) as CalculatedOrderType;
  }

  public async remove(id: number): Promise<void> {
    await this.CalcOrderClass.query().deleteById(id);
  }

  public async findAll(): Promise<CalculatedOrderType[]> {
    return <unknown>await this.CalcOrderClass.query() as CalculatedOrderType[];
  }
}
