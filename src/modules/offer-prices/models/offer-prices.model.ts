import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { PriceLists } from '@/modules/price-lists/models/price-lists.model';
import { Sku } from '@/modules/sku/models/sku.model';
import { Suppliers } from '@/modules/suppliers/models/suppliers.model';

@Table({
  timestamps: false,
})
@Table
export class OfferPrices extends Model {
  @ForeignKey(() => PriceLists)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  price_list_id: number;

  @ForeignKey(() => Suppliers)
  @Column({ type: DataType.INTEGER })
  supplier_id: number;

  @ForeignKey(() => Sku)
  @Column({ type: DataType.INTEGER })
  sku_id: number;

  @Column({ type: DataType.INTEGER })
  price: number;
}
