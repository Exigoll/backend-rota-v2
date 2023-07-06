import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Sku } from '@/modules/sku/models/sku.model';
import { Suppliers } from '@/modules/suppliers/models/suppliers.model';

@Table({
  timestamps: false,
})
@Table
export class SupplierOffers extends Model {
  @ForeignKey(() => Suppliers)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  supplier_id: number;

  @ForeignKey(() => Sku)
  @Column({ type: DataType.INTEGER })
  sku_id: number;

  @Column({ type: DataType.INTEGER })
  base_price: number;

  @Column({ type: DataType.INTEGER })
  qty: number;
}
