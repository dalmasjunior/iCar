
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CarInput {
    _id?: string;
    make?: string;
    type?: string;
    version?: string;
    year?: number;
    kilometers?: number;
    transmission?: string;
    price?: number;
}

export class Car {
    make: string;
    type: string;
    version: string;
    year: number;
    kilometers: number;
    transmission: string;
    price: number;
    _id: ObjectId;
}

export abstract class IQuery {
    abstract getCars(): Car[] | Promise<Car[]>;

    abstract getCar(car: CarInput[]): Car[] | Promise<Car[]>;

    abstract getCarInYearsPrice(from: number, to: number, field: string): Car[] | Promise<Car[]>;
}

export abstract class IMutation {
    abstract createCar(input: CarInput): Car | Promise<Car>;

    abstract updateCar(id: string, car: CarInput): Car | Promise<Car>;
}

export type ObjectId = any;
