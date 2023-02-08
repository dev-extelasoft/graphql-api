import { Field, InputType } from '@nestjs/graphql';
import { BaseInput } from '../../../common/entities/base.input';
import { Company } from './company.entity';

type CompanyInputType = Omit<Company, 'users'>

@InputType()
export class CompanyInput extends BaseInput implements CompanyInputType {
  @Field({ nullable: true })
  companyId: string;

  @Field()
  city: string;

  @Field()
  name: string;
}
