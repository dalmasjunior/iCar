import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { closeInMongodConnection, rootMongooseTestModule } from '../../test/MongooseTestModule.spec';

import { CarService } from './car.service';
import { Car, CarSchema } from './car.schema';
import { CarInput } from './car.input';
import { CarResolver } from './car.resolver';
import { carInputMock } from './mocks/car.input.mock';

describe('CarService', () => {
  let service: CarService;
  let resolver: CarResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CarResolver],
      providers: [
        CarService
      ],
    }).compile();

    service = module.get<CarService>(CarService);
    resolver = module.get<CarResolver>(CarResolver);
  });
  describe('createCat()', () => {
    it('should insert new car', async () => {
    
      await resolver.createCar(carInputMock)
      expect(service.create).toBeCalled();
    })

  })
});
