import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { User } from '@/modules/users/models/user.model';

@Table({
  timestamps: true,
  createdAt: 'creator_dt',
  updatedAt: false,
})
@Table
export class Orders extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  user_id: number;

  @Column({ type: DataType.DATEONLY, field: 'creator_dt' })
  creator_dt: Date;

  @BelongsTo(() => User, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  user: User;
}
