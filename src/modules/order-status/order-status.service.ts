import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { OrderStatusDTO } from './dto';
import { OrderStatus } from './models/order-status.model';
import { OrderStatusResponse } from './response';

@Injectable()
export class OrderStatusService {
  constructor(
    @InjectModel(OrderStatus)
    private readonly orderStatusRepository: typeof OrderStatus,
  ) {}

  async createOrderStatus(
    dto: Partial<OrderStatusDTO>,
  ): Promise<OrderStatusResponse> {
    try {
      const data = await this.orderStatusRepository.create(dto);
      return {
        id: data.id,
        name: data.name,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
