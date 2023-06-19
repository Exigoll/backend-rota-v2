import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { SupplierOffers } from './models/supplier-offers';
import { SupplierOffersResponse } from './response';

@Injectable()
export class SupplierOffersService {
  constructor(
    @InjectModel(SupplierOffers)
    private readonly supplierOffersRepository: typeof SupplierOffers,
  ) {}

  async createSupplierOffers(dto): Promise<SupplierOffersResponse> {
    try {
      const supplierOffers = await this.supplierOffersRepository.create(dto);
      return {
        supplier_id: supplierOffers.supplier_id,
        sku_id: supplierOffers.sku_id,
        base_price: supplierOffers.base_price,
        qty: supplierOffers.qty,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
