import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { PriceLists } from './models/price-lists.model';
import { PriceListsController } from './price-lists.controller';
import { PriceListsService } from './price-lists.service';

@Module({
  imports: [SequelizeModule.forFeature([PriceLists])],
  providers: [PriceListsService],
  controllers: [PriceListsController],
})
export class PriceListsModule {}
