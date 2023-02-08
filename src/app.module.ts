import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ModulesModule } from './modules/modules.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmSettings } from './configs/typeorm.config';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/api',
      autoSchemaFile: join(process.cwd(), 'graphql.gql'),
    }),
    TypeOrmModule.forRoot(typeOrmSettings),
    ModulesModule,
  ],
})
export class AppModule {}
