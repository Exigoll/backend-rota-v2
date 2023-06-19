import {
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { User } from '@/modules/users/models/user.model';

@Table({
  timestamps: false,
})
@Table
export class Orders extends Model {
  @PrimaryKey
  @Column
  id: string;

  @ForeignKey(() => User)
  user_id: User;

  @Column
  creator_dt: Date;
}
