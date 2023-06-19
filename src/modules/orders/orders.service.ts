import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Orders } from './models/orders.model';
import { CreateOrdersResponse } from './response';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Orders)
    private readonly ordersRepository: typeof Orders,
  ) {}

  async createOrders(user, dto): Promise<CreateOrdersResponse> {
    try {
      const orders = {
        id: dto.id,
        user: user.id,
        creator_dt: dto.creator_dt,
      };

      await this.ordersRepository.create(orders);

      return orders;
    } catch (e) {
      throw new Error(e);
    }
  }

  async getUserOrders(userId: number): Promise<Orders[]> {
    try {
      return this.ordersRepository.findAll({
        where: { user: userId },
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
