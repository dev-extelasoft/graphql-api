import { Module } from '@nestjs/common';
import { UserResolver } from './services/user.resolver';
import { RepositoryModule } from '../../repository/repository.module';
import { UserService } from './services/user.service';

@Module({
  imports: [RepositoryModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
