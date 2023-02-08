import { Field, Int, ObjectType } from '@nestjs/graphql';

export default function PaginatedResponse<T>(TItemClass: T) {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass {
    @Field(() => Int)
    count: number;

    @Field(() => [TItemClass])
    data: T[];
  }

  return PaginatedResponseClass;
}