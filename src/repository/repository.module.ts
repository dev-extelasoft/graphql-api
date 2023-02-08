import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositoryService } from './services/repository.service';
import { User } from '../modules/user/entities/user.entity';
import { UserRepository } from './services/user.repository';
import { Company } from '../modules/company/entities/company.entity';
import { CompanyRepository } from './services/company.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Company,
    ]),
  ],
  providers: [RepositoryService, UserRepository, CompanyRepository],
  exports: [RepositoryService, UserRepository, CompanyRepository],
})
export class RepositoryModule {}
