import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CompanyRepository } from './company.repository';

@Injectable()
export class RepositoryService {
    constructor(
      private readonly userRepository: UserRepository,
      private readonly companyRepository: CompanyRepository,
    ) {}
}
