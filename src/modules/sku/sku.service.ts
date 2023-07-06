import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Brands } from '@/modules/brands/models/brands.model';

import { SkuDTO } from './dto';
import { Sku } from './models/sku.model';
import { SkuResponse } from './response';

@Injectable()
export class SkuService {
  constructor(
    @InjectModel(Sku)
    private readonly skuRepository: typeof Sku,
    @InjectModel(Brands)
    private readonly brandsRepository: typeof Brands,
  ) {}

  async createSku(dto: Partial<SkuDTO>): Promise<SkuResponse> {
    try {
      const { owner_brand_id, article } = dto;

      // Проверяем существование бренда
      const brand = await this.brandsRepository.findByPk(owner_brand_id);
      if (!brand) {
        throw new Error('Brand not found');
      }

      // Создаем новую SKU
      const sku = await this.skuRepository.create({ owner_brand_id, article });

      return {
        id: sku.id,
        owner_brand_id: sku.owner_brand_id,
        article: sku.article,
      };
    } catch (e) {
      throw new Error(e);
    }
    /* try {
      const data = await this.skuRepository.create(dto);
      return {
        id: data.id,
        owner_brand_id: data.owner_brand_id,
        article: data.article,
      };
    } catch (e) {
      throw new Error(e);
    } */
  }
}
