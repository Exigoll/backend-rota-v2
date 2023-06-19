import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { OrderLines } from './models/order-lines.model';
import { OrderLinesResponse } from './response';

@Injectable()
export class OrderLinesService {
  constructor(
    @InjectModel(OrderLines)
    private readonly orderLinesRepository: typeof OrderLines,
  ) {}

  async createOrderLines(dto): Promise<OrderLinesResponse> {
    try {
      const data = await this.orderLinesRepository.create(dto);
      return {
        id: data.id,
        owner_order_id: data.owner_order_id,
        sku_id: data.sku_id,
        supplier_id: data.supplier_id,
        qty: data.qty,
        supplier_price: data.supplier_price,
        client_price: data.client_price,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
