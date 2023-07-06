import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { SuppliersDTO } from './dto';
import { Suppliers } from './models/suppliers.model';
import { SuppliersResponse } from './response';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectModel(Suppliers)
    private readonly suppliersRepository: typeof Suppliers,
  ) {}

  async createSuppliers(
    dto: Partial<SuppliersDTO>,
  ): Promise<SuppliersResponse> {
    try {
      const data = await this.suppliersRepository.create(dto);
      return {
        id: data.id,
        stock: data.stock,
      };
    } catch (e) {
      throw new Error(e);
    }
  }
}
