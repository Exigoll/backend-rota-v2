import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { OfferPrices } from './models/offer-prices.model';
import { OfferPricesController } from './offer-prices.controller';
import { OfferPricesService } from './offer-prices.service';

@Module({
  imports: [SequelizeModule.forFeature([OfferPrices])],
  providers: [OfferPricesService],
  controllers: [OfferPricesController],
})
export class OfferPricesModule {}
