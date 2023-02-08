import { Module } from '@nestjs/common';
import { RepositoryModule } from '../../repository/repository.module';
import { CompanyService } from './services/company.service';
import { CompanyResolver } from './services/company.resolver';

@Module({
  imports: [RepositoryModule],
  providers: [CompanyService, CompanyResolver],
  exports: [CompanyService],
})
export class CompanyModule {}
