import { Injectable } from '@nestjs/common';
import { CompanyRepository } from '../../../repository/services/company.repository';
import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';
import { Company } from '../entities/company.entity';
import { UserRepository } from '../../../repository/services/user.repository';

@Injectable()
export class CompanyService {
  constructor(
    private readonly companyRepository: CompanyRepository,
    private readonly userRepository: UserRepository,
  ) {
  }

  async findCompanies(options: FindManyOptions<Company>) {
    const [ data, count ] = await this.companyRepository.findAll(options)
    return {data, count};
  }

  async findCompany(options: FindOneOptions<Company>) {
    return this.companyRepository.findOne(options);
  }

  async saveCompany(data: DeepPartial<Company>) {
    const user = await this.userRepository.findOne({where: {userId: 'f01d0ca8-efef-4032-8677-e9d18c4771eb'}});
    return this.companyRepository.save({...data, users: [ user ]});
  }

  async resolveUsers(companyId: string) {
    const [data, count] = await this.userRepository.findAll({ where: { companies: { companyId } } });
    return data;
  }
}
