import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export abstract class EntityQueryInput {
  @Field(() => Int, { nullable: true })
  skip?: number = 0;

  @Field(() => Int, { nullable: true })
  take?: number = 20;

  abstract where?: unknown;
}