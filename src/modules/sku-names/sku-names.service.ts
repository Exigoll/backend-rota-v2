import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { SkuNamesDTO } from './dto';
import { SkuNames } from './models/sku-names.model';
import { SkuNamesResponse } from './response';

@Injectable()
export class SkuNamesService {
  constructor(
    @InjectModel(SkuNames)
    private readonly skuNamesRepository: typeof SkuNames,
  ) {}

  async createSkuNames(dto: Partial<SkuNamesDTO>): Promise<SkuNames> {
    try {
      const skuName = await this.skuNamesRepository.create(dto);
      return skuName;
    } catch (e) {
      throw new Error('Failed to create SkuName');
    }
  }

  async getSkuNameById(id: number): Promise<SkuNames> {
    try {
      const skuName = await this.skuNamesRepository.findByPk(id);
      if (!skuName) {
        throw new Error('SkuName not found');
      }
      return skuName;
    } catch (e) {
      throw new Error('Failed to get SkuName by ID');
    }
  }

  async updateSkuName(id: number, dto: SkuNamesDTO): Promise<SkuNames> {
    try {
      const skuName = await this.getSkuNameById(id);
      await skuName.update(dto);
      return skuName;
    } catch (e) {
      throw new Error('Failed to update SkuName');
    }
  }

  async deleteSkuName(id: number): Promise<void> {
    try {
      const skuName = await this.getSkuNameById(id);
      await skuName.destroy();
    } catch (e) {
      throw new Error('Failed to delete SkuName');
    }
  }
}
