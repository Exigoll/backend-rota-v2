import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Brands } from '@/modules/brands/models/brands.model';

import { Sku } from './models/sku.model';
import { SkuController } from './sku.controller';
import { SkuService } from './sku.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Sku]),
    SequelizeModule.forFeature([Brands]),
  ],
  providers: [SkuService],
  controllers: [SkuController],
})
export class SkuModule {}
