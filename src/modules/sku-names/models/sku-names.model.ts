import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Sku } from '@/modules/sku/models/sku.model';

@Table({
  timestamps: false,
})
export class SkuNames extends Model {
  @ForeignKey(() => Sku)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  owner_sku_id: number;

  @BelongsTo(() => Sku, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  sku: Sku;

  @Column({ type: DataType.STRING })
  name: string;
}
