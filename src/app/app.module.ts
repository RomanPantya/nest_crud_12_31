import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { dbConnectionOptions } from 'src/db-connection-option';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(dbConnectionOptions)],
})
export class AppModule {}
