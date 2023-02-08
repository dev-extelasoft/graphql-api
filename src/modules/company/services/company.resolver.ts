import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from '../entities/company.entity';
import { QueryCompanyInput } from '../dto/query-company.input';
import { CompanyInput } from '../entities/company.input';
import { PaginatedCompany } from '../dto/paginated-company.output';
import { User } from '../../user/entities/user.entity';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(
    private readonly companyService: CompanyService,
  ) {
  }

  @Query(() => PaginatedCompany)
  findCompanies(@Args('query', {nullable: true}) query: QueryCompanyInput) {
    return this.companyService.findCompanies(query);
  }

  @Query(() => Company)
  findCompany(@Args('query', {nullable: true}) query: QueryCompanyInput): Promise<Company> {
    return this.companyService.findCompany(query);
  }

  @Mutation(() => Company)
  saveCompany(@Args('data') data: CompanyInput): Promise<Company> {
    return this.companyService.saveCompany(data);
  }

  @ResolveField(() => [ User ])
  users(@Parent() company: Company) {
    return this.companyService.resolveUsers(company.companyId);
  }
}
