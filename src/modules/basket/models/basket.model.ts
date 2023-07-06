import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Sku } from '@/modules/sku/models/sku.model';
import { User } from '@/modules/users/models/user.model';

@Table({
  timestamps: false,
})
@Table
export class Basket extends Model {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  owner_user_id: number;

  @ForeignKey(() => Sku)
  @Column({ type: DataType.INTEGER })
  owner_sku_id: number;

  @BelongsTo(() => Sku, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  sku: Sku;

  @Column({ type: DataType.INTEGER })
  supplier_id: number;

  @Column({ type: DataType.INTEGER })
  qty: number;

  @Column({ type: DataType.INTEGER })
  price: number;
}
