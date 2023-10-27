import {Inject, Injectable, InternalServerErrorException} from '@nestjs/common';
import {ModelClass} from "objection";
import Meal from '../../domain/models/Meal.model';
import {MealDto} from "../assets/dtos/meals.dto";
import {MealType} from "../assets/interface/meal.interface";

@Injectable()
export class MealsService {
  constructor(@Inject("Meal") private readonly MealClass: ModelClass<Meal>) {
  }
  public async create(data: MealDto): Promise<MealType> {
    try {
     return <unknown> await this.MealClass.query().insert(data) as MealType;
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  public async findOne(id: number): Promise<MealType> {
    return <unknown>await this.MealClass.query().findById(id) as MealType;
  }

  public async update(id: number, data): Promise<MealType> {
    return <unknown>await this.MealClass.query().patchAndFetchById(id, data) as MealType;
  }

  public async remove(id: number): Promise<void> {
    await this.MealClass.query().deleteById(id);
  }

  public async findAll(): Promise<MealType[]> {
    return <unknown>await this.MealClass.query().withGraphFetched("brand") as MealType[];
  }
}
