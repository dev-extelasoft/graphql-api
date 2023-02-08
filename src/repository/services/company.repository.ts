import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from '../../modules/company/entities/company.entity';
import { DeepPartial, FindManyOptions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class CompanyRepository {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>
  ) {
  }

  findAll(options?: FindManyOptions<Company>) {
    return this.companyRepository.findAndCount(options);
  }

  findOne(options: FindOneOptions<Company>) {
    return this.companyRepository.findOne(options);
  }

  save(data: DeepPartial<Company>) {
    return this.companyRepository.save(data);
  }
}
