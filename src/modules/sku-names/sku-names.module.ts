import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { SkuNames } from './models/sku-names.model';
import { SkuNamesController } from './sku-names.controller';
import { SkuNamesService } from './sku-names.service';

@Module({
  imports: [SequelizeModule.forFeature([SkuNames])],
  providers: [SkuNamesService],
  controllers: [SkuNamesController],
})
export class SkuNamesModule {}
