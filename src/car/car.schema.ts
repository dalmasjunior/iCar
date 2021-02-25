import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const CarSchema = new mongoose.Schema({
    make: String,
    type: String,
    version: String,
    year: Number,
    kilometers: Number,
    transmission: String,
    price: Number
});

@ObjectType()
export class Car extends Document {
    
    @Field()
    make?: string;

    @Field()
    type?: string;

    @Field()
    version?: string;

    @Field()
    year?: number;

    @Field()
    kilometers?: number;

    @Field()
    transmission?: string;

    @Field()
    price?: number;
}