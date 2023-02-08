import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';
import { UserInput } from '../entities/user.input';
import { PaginatedUser } from '../dto/paginated-user.output';
import { Company } from '../../company/entities/company.entity';
import { QueryUserInput } from '../dto/query-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {
  }

  @Query(() => PaginatedUser)
  async findUsers(@Args('query', {nullable: true}) query: QueryUserInput) {
    return this.userService.findAll(query);
  }

  @Mutation(() => User)
  saveUser(@Args('data') data: UserInput): Promise<User> {
    return this.userService.save(data);
  }

  @ResolveField(() => [ Company ])
  companies(@Parent() user: User) {
    return this.userService.resolveCompanies(user.userId);
  }
}
