import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { PriceLists } from './models/price-lists.model';
import { PriceListsResponse } from './response';

@Injectable()
export class PriceListsService {
  constructor(
    @InjectModel(PriceLists)
    private readonly priceListsRepository: typeof PriceLists,
  ) {}

  async createPriceLists(dto): Promise<PriceListsResponse> {
    try {
      const priceLists = await this.priceListsRepository.create(dto);
      return {
        id: priceLists.id,
        name: priceLists.name,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
