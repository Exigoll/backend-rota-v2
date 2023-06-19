import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Basket } from './models/basket.model';
import { CreateBasketResponse } from './response';

@Injectable()
export class BasketService {
  constructor(
    @InjectModel(Basket)
    private readonly basketRepository: typeof Basket,
  ) {}

  async createBasket(user, dto): Promise<CreateBasketResponse> {
    try {
      const basket = {
        user: user.id,
        owner_sku_id: dto.owner_sku_id,
        qty: dto.qty,
        price: dto.price,
        supplier: dto.supplier,
      };

      await this.basketRepository.create(basket);

      return basket;
    } catch (e) {
      throw new Error(e);
    }
  }

  async getUserBasket(userId: number): Promise<Basket[]> {
    try {
      return this.basketRepository.findAll({
        where: { user: userId },
      });
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteBasketAsset(
    userId: number,
    owner_sku_id: string,
  ): Promise<boolean> {
    try {
      await this.basketRepository.destroy({
        where: { id: owner_sku_id, user: userId },
      });

      return true;
    } catch (e) {
      throw new Error(e);
    }
  }
}
