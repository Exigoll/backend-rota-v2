import { Column, HasMany, Model, Table } from 'sequelize-typescript';

import { Product } from '@/modules/products/models/products.model';

@Table
export class User extends Model {
  @Column
  firstName: string;

  @Column
  userName: string;

  @Column
  email: string;

  @Column
  password: string;

  @HasMany(() => Product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  product: Product[];
}
