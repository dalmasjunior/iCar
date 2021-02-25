import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CarInput {
    @Field({nullable: true})
    _id?: string;

    @Field({nullable: true})
    make?: string;

    @Field({nullable: true})
    type?: string;

    @Field({nullable: true})
    version?: string;

    @Field({nullable: true})
    year?: number;

    @Field({nullable: true})
    kilometers?: number;

    @Field({nullable: true})
    transmission?: string;

    @Field({nullable: true})
    price?: number;
}