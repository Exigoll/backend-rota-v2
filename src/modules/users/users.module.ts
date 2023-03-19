import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TokenModule } from '@/modules/token/token.module';

import { User } from './models/user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [SequelizeModule.forFeature([User]), TokenModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
