import { EntityQueryInput } from '../../../common/entities/entity-query.input';
import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { UserInput } from '../entities/user.input';

@InputType()
class UserWhere extends PartialType(OmitType(UserInput, [])) {}

@InputType()
export class QueryUserInput extends EntityQueryInput {
  @Field({ nullable: true })
  where: UserWhere;
}