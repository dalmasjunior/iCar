import { Connection } from 'mongoose';
import { CarSchema } from './car.schema';

export const carProviders = [
    {
        provide: 'CAR_MODEL',
        useFactory: (connection: Connection) => 
            connection.model('Car', CarSchema),
        inject: ['DATABASE_CONNECTION']
    }
];