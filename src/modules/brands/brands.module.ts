import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { Brands } from './models/brands.model';

@Module({
  imports: [SequelizeModule.forFeature([Brands])],
  providers: [BrandsService],
  controllers: [BrandsController],
})
export class BrandsModule {}
