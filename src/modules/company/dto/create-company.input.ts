import { CompanyInput } from '../entities/company.input';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateCompanyInput extends CompanyInput {}