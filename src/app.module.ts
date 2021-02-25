import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { CarService } from './car/car.service';
import { CarModule } from './car/car.module';
import { CarResolver } from './car/car.resolver';
import { carProviders } from './car/car.provider';
import { databaseProviders } from './database/database.provider';
import { DatabaseModule } from './database/database.module';
import { join } from 'path';



@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      context: ({ req }: any) => ({ req }),
      definitions: {
        path: join(process.cwd(), 'src/graphql.classes.ts'),
        outputAs: 'class',
      },
  }), 
  CarModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService, 
    CarService,
    CarResolver,
    ...databaseProviders,
    ...carProviders,
  ],
})
export class AppModule {}
