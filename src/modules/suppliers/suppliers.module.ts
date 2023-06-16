import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Suppliers } from './models/suppliers.model';
import { SuppliersController } from './suppliers.controller';
import { SuppliersService } from './suppliers.service';

@Module({
  imports: [SequelizeModule.forFeature([Suppliers])],
  providers: [SuppliersService],
  controllers: [SuppliersController],
})
export class SuppliersModule {}
