import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../repository/services/user.repository';
import { User } from '../entities/user.entity';
import { DeepPartial, FindManyOptions } from 'typeorm';
import { CompanyRepository } from '../../../repository/services/company.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly companyRepository: CompanyRepository,
  ) {
  }

  async findAll(options: FindManyOptions<User>) {
    const [ data, count ] = await this.userRepository.findAll(options);
    return {data, count};
  }

  save(data: DeepPartial<User>) {
    return this.userRepository.save(data);
  }

  async resolveCompanies(userId: string) {
    const [data, count] = await this.companyRepository.findAll({ where: { users: { userId } } });
    return data;
  }
}