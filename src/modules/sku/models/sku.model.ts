import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Brands } from '@/modules/brands/models/brands.model';

@Table({
  timestamps: false,
})
export class Sku extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Brands)
  @Column({ type: DataType.INTEGER })
  owner_brand_id: number;

  @BelongsTo(() => Brands, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  brand: Brands;

  @Column({ type: DataType.STRING })
  article: string;
}
