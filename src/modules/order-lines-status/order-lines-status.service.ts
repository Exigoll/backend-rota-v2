import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { OrderLinesStatus } from './models/order-lines-status';
import { OrderLinesStatusResponse } from './response';

@Injectable()
export class OrderLinesStatusService {
  constructor(
    @InjectModel(OrderLinesStatus)
    private readonly orderLinesStatusRepository: typeof OrderLinesStatus,
  ) {}

  async createOrderLinesStatus(dto): Promise<OrderLinesStatusResponse> {
    try {
      const data = await this.orderLinesStatusRepository.create(dto);
      return {
        owner_order_line_id: data.owner_order_line_id,
        owner_status_id: data.owner_status_id,
        qty: data.qty,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
