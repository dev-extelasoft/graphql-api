import { ObjectType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import PaginatedResponse from '../../../common/dto/pagination.dto';

@ObjectType()
export class PaginatedUser extends PaginatedResponse(User) {}