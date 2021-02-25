import { Scalar } from '@nestjs/graphql';
import { Kind, ASTNode } from 'graphql';
import { ObjectId } from 'mongodb';

@Scalar('ObjectId')
export class ObjectIdScalar {
    description = 'Mongo object id scalar type';

    parseValue(value: string) {
        return new ObjectId(value);
    }

    serialize(value: ObjectId) {
        return value.toHexString();
    }

    parseLiteral(ast: ASTNode) {
        return ast.kind === Kind.STRING ? new ObjectId(ast.value) : null;
    }
}