import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Suppliers } from './models/suppliers.model';
import { SuppliersResponse } from './response';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectModel(Suppliers)
    private readonly suppliersRepository: typeof Suppliers,
  ) {}

  async createSuppliers(dto): Promise<SuppliersResponse> {
    try {
      const suppliers = await this.suppliersRepository.create(dto);
      return {
        id: suppliers.id,
        stock: suppliers.stock,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
