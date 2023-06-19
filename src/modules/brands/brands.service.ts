import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Brands } from './models/brands.model';
import { BrandResponse } from './response';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brands)
    private readonly brandsRepository: typeof Brands,
  ) {}

  async createBrand(dto): Promise<BrandResponse> {
    try {
      const brand = await this.brandsRepository.create(dto);
      return {
        id: brand.id,
        name: brand.name,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
