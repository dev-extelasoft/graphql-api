import { ObjectType } from '@nestjs/graphql';
import PaginatedResponse from '../../../common/dto/pagination.dto';
import { Company } from '../entities/company.entity';

@ObjectType()
export class PaginatedCompany extends PaginatedResponse(Company) {}