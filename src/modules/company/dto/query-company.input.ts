import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { EntityQueryInput } from '../../../common/entities/entity-query.input';
import { CompanyInput } from '../entities/company.input';

@InputType()
class CompanyWhere extends PartialType(OmitType(CompanyInput, [])) {}

@InputType()
export class QueryCompanyInput extends EntityQueryInput {
    @Field({ nullable: true })
    where?: CompanyWhere;
}