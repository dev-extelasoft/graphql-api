import { Field, InputType } from '@nestjs/graphql';
import { BaseInput } from '../../../common/entities/base.input';
import { User } from './user.entity';

type UserInputType = Omit<User, 'role' | 'companies'>

@InputType()
export class UserInput extends BaseInput implements UserInputType {
  @Field({ nullable: true })
  userId: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  phone: string;
}