import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ObjectIdScalar } from 'src/scalars/objectid.scalar';
import { carProviders } from './car.provider';
import { CarResolver } from './car.resolver';
import { CarService } from './car.service';

@Module({
  imports: [DatabaseModule],
  providers: [CarResolver, CarService, ...carProviders, ObjectIdScalar]
})
export class CarModule {}
