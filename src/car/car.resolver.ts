import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CarInput } from './car.input';
import { CarService } from './car.service';
import { Car } from './car.schema';

@Resolver(() => Car)
export class CarResolver {
    constructor(private carService: CarService) {}

    @Mutation(() => Car)
    async createCar(@Args('input') input: CarInput) {
        return this.carService.create(input);
    }

    @Mutation(() => Car)
    async updateCar(
        @Args('id') id: string,
        @Args('car') carUpdate: CarInput
    ) {
        return this.carService.update(id, carUpdate);
    }

    @Query(() => [Car])
    async getCars() {
        return this.carService.find();
    }

    @Query(() => [Car])
    async getCar(@Args({ name: 'car', type: () => [CarInput]}) car: CarInput) {
        return this.carService.findOne({...car});
    }

    @Query(() => [Car])
    async getCarInYearsPrice(
        @Args('from') start: number,
        @Args('to') end: number,
        @Args('field') field: string
    ): Promise<Car[]> {
        return this.carService.find(start, end, field);
    }
}
