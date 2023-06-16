import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BrandController } from './brands.controller';
import { BrandService } from './brands.service';
import { Brands } from './models/brands.model';

@Module({
  imports: [SequelizeModule.forFeature([Brands])],
  providers: [BrandService],
  controllers: [BrandController],
})
export class BrandsModule {}
