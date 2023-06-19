import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { OfferPrices } from './models/offer-prices.model';
import { OfferPricesResponse } from './response';

@Injectable()
export class OfferPricesService {
  constructor(
    @InjectModel(OfferPrices)
    private readonly offerPricesRepository: typeof OfferPrices,
  ) {}

  async createOfferPrices(dto): Promise<OfferPricesResponse> {
    try {
      const offerPrices = await this.offerPricesRepository.create(dto);
      return {
        price_list_id: offerPrices.price_list_id,
        supplier_id: offerPrices.supplier_id,
        sku_id: offerPrices.sku_id,
        price: offerPrices.price,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
