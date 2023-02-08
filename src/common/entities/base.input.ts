import { BaseEntity } from './base.entity';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class BaseInput implements BaseEntity {
  @Field(() => Int, { nullable: true })
  id: number;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}