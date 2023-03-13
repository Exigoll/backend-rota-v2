import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Product } from './models/products.model';
import { CreateProductResponse } from './response';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productsRepository: typeof Product,
  ) {}

  async createAsset(user, dto): Promise<CreateProductResponse> {
    try {
      const product = {
        user: user.id,
        brand: dto.brand,
        descr: dto.descr,
        article: dto.article,
      };

      await this.productsRepository.create(product);

      return product;
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteAsset(userId: number, article: string): Promise<boolean> {
    try {
      await this.productsRepository.destroy({
        where: { id: article, user: userId },
      });

      return true;
    } catch (e) {
      throw new Error(e);
    }
  }
}
