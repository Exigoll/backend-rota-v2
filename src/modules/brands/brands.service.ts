import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { BrandsDTO } from './dto';
import { Brands } from './models/brands.model';
import { BrandsResponse } from './response';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brands)
    private readonly brandsRepository: typeof Brands,
  ) {}

  async createBrands(dto: Partial<BrandsDTO>): Promise<BrandsResponse> {
    try {
      const data = await this.brandsRepository.create(dto);
      return {
        id: data.id,
        name: data.name,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
