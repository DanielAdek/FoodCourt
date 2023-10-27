// src/services/order-log.service.ts

import {Inject, Injectable} from '@nestjs/common';
import OrderLog from '../../domain/models/OrderLog.model';
import {ModelClass} from "objection";
import {OrderLogType} from "../assets/interface/order-log.interface";

@Injectable()
export class OrderLogService {
  constructor(@Inject("OrderLog") private readonly OrderLogClass: ModelClass<OrderLog>) {}

  public async create(data): Promise<OrderLogType> {
    return <unknown>await this.OrderLogClass.query().insert(data) as OrderLogType;
  }

  public async findOne(id: number): Promise<OrderLogType> {
    return <unknown>await this.OrderLogClass.query().findById(id) as OrderLogType;
  }

  public async update(id: number, data): Promise<OrderLogType> {
    return <unknown>await this.OrderLogClass.query().patchAndFetchById(id, data) as OrderLogType;
  }

  public async remove(id: number): Promise<void> {
    await OrderLog.query().deleteById(id);
  }

  public async findAll(): Promise<OrderLogType[]> {
    return <unknown>await this.OrderLogClass.query() as OrderLogType[];
  }
}
