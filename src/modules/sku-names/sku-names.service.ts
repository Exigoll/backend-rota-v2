import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { SkuNames } from './models/sku-names.model';
import { SkuNamesResponse } from './response';

@Injectable()
export class SkuNamesService {
  constructor(
    @InjectModel(SkuNames)
    private readonly skuNamesRepository: typeof SkuNames,
  ) {}

  async createSkuNames(dto): Promise<SkuNamesResponse> {
    try {
      const skuNames = await this.skuNamesRepository.create(dto);
      return {
        owner_sku_id: skuNames.owner_sku_id,
        name: skuNames.name,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
