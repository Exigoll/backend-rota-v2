import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { User } from '@/modules/users/models/user.model';

@Table
export class Product extends Model {
  @ForeignKey(() => User)
  user: User;

  @Column
  brand: string;

  @Column
  descr: string;

  @Column
  article: string;
}
