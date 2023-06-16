import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Sku } from './models/sku.model';
import { SkuController } from './sku.controller';
import { SkuService } from './sku.service';

@Module({
  imports: [SequelizeModule.forFeature([Sku])],
  providers: [SkuService],
  controllers: [SkuController],
})
export class SkuModule {}
