import mongoose from 'mongoose';
import { MONGO_DB_CONNECTION_STRING } from '../constants';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> => mongoose.connect(MONGO_DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            authSource: process.env.DB_MONGO_AUTHSOURCE,
            user: process.env.DB_MONGO_USER,
            pass: process.env.DB_MONGO_PASSWORD,
            poolSize: 10,
            bufferMaxEntries: 0
        })
    },
];