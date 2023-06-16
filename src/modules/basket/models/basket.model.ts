import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { User } from '@/modules/users/models/user.model';

@Table({
  timestamps: false,
})
@Table
export class Basket extends Model {
  @ForeignKey(() => User)
  user: User;

  @Column
  owner_sku_id: string;

  @Column
  qty: string;

  @Column
  price: string;

  @Column
  supplier: string;
}
