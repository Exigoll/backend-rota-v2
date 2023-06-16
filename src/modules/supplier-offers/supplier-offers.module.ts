import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { SupplierOffers } from './models/supplier-offers';
import { SupplierOffersController } from './supplier-offers.controller';
import { SupplierOffersService } from './supplier-offers.service';

@Module({
  imports: [SequelizeModule.forFeature([SupplierOffers])],
  providers: [SupplierOffersService],
  controllers: [SupplierOffersController],
})
export class SupplierOffersModule {}
