import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Sku } from './models/sku.model';
import { SkuResponse } from './response';

@Injectable()
export class SkuService {
  constructor(
    @InjectModel(Sku)
    private readonly skuRepository: typeof Sku,
  ) {}

  async createSku(dto): Promise<SkuResponse> {
    try {
      const sku = await this.skuRepository.create(dto);
      return {
        id: sku.id,
        owner_brand_id: sku.owner_brand_id,
        article: sku.article,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
