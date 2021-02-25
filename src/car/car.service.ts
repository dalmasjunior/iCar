import { Inject, Injectable } from '@nestjs/common';
import { Model, FilterQuery, CreateQuery } from 'mongoose';
import { Car } from './car.schema';


enum FIELD {
    year,
    price
}

@Injectable()
export class CarService {    

    constructor(
        @Inject('CAR_MODEL') private carModel: Model<Car>
    ) {}

    async create(input: CreateQuery<Car>): Promise<Car> {
        return await this.carModel.create(input);
    }

    async update(id: string, carUpdate: CreateQuery<Car>): Promise<Car> {
        
        const car = await this.carModel.findById(id).exec()
        
        for(let up in carUpdate) {
            car[up] = carUpdate[up]
        }
        
        return car.save();
    }

    async findOne(query: FilterQuery<Car>): Promise<Car[]> {
        return this.carModel.find(query[0]).lean();
    }

    async find(start: number = 0, end: number = 99999, field: string = 'year'): Promise<Car[]> {
        const query = {};
        query[field] = { $gte :start, $lte: end};
        
        return this.carModel.find(query).lean();
    }
}
