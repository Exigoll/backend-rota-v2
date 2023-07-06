import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { PriceListsDTO } from './dto';
import { PriceLists } from './models/price-lists.model';
import { PriceListsResponse } from './response';

@Injectable()
export class PriceListsService {
  constructor(
    @InjectModel(PriceLists)
    private readonly priceListsRepository: typeof PriceLists,
  ) {}

  async createPriceLists(
    dto: Partial<PriceListsDTO>,
  ): Promise<PriceListsResponse> {
    try {
      const data = await this.priceListsRepository.create(dto);
      return {
        id: data.id,
        name: data.name,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
