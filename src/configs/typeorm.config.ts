import * as config from 'config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

interface IDatabaseConfig {
  database: string;
  user: string;
  password: string;
  port: number;
  host: string;
}

const dbConfig = config.get<IDatabaseConfig>('db');

export const typeOrmSettings: TypeOrmModuleOptions = {
  type: 'postgres',
  host: dbConfig.host,
  database: dbConfig.database,
  username: dbConfig.user,
  password: dbConfig.password,
  port: dbConfig.port,
  entities: ['dist/modules/**/*.entity.js'],
  migrationsTableName: 'migration',
  migrations: ['migrations/*.ts'],
  synchronize: true,
};
