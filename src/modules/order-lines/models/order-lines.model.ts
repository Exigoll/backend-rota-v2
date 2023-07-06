import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Orders } from '@/modules/orders/models/orders.model';
import { Sku } from '@/modules/sku/models/sku.model';
import { Suppliers } from '@/modules/suppliers/models/suppliers.model';

@Table({
  timestamps: false,
})
@Table
export class OrderLines extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Orders)
  @Column({ type: DataType.INTEGER })
  owner_order_id: number;

  @BelongsTo(() => Orders, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  order: Orders;

  @ForeignKey(() => Sku)
  @Column({ type: DataType.INTEGER })
  sku_id: number;

  @BelongsTo(() => Sku, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  sku: Sku;

  @ForeignKey(() => Suppliers)
  @Column({ type: DataType.INTEGER })
  supplier_id: number;

  @BelongsTo(() => Suppliers, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  supplier: Suppliers;

  @Column({ type: DataType.INTEGER })
  qty: number;

  @Column({ type: DataType.INTEGER })
  supplier_price: number;

  @Column({ type: DataType.INTEGER })
  client_price: number;
}
