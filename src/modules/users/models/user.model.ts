import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { PriceLists } from '@/modules/price-lists/models/price-lists.model';

@Table({
  timestamps: true,
  createdAt: 'creator_dt',
  updatedAt: false,
})
export class User extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  password: string;

  @Column({ type: DataType.STRING })
  fullName: string;

  @Column({ type: DataType.STRING })
  userName: string;

  @Column({ type: DataType.STRING })
  phoneNumber: string;

  @Column({ type: DataType.STRING })
  address: string;

  @Column({ type: DataType.STRING })
  legalForm: string;

  @Column({ type: DataType.STRING })
  kindOfActivity: string;

  @Column({ type: DataType.DATEONLY, field: 'creator_dt' })
  creator_dt: Date;

  @ForeignKey(() => PriceLists)
  @Column({ type: DataType.INTEGER })
  price_list_id: number;

  @BelongsTo(() => PriceLists, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  price_lists: PriceLists;
}
