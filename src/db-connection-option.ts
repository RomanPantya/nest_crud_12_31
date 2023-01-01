import { config } from 'dotenv';
import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

config({ path: join(process.cwd(), '.env') });
config({ path: join(process.cwd(), '.default.env') });

export const dbConnectionOptions: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as 'postgres' | 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  autoLoadEntities: true,
};
