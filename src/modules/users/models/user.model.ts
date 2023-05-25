import { Column, HasMany, Model, Table } from 'sequelize-typescript';

import { Product } from '@/modules/products/models/products.model';

@Table
export class User extends Model {
  @Column
  email: string;

  @Column
  password: string;

  @Column
  fullName: string;

  @Column
  userName: string;

  @Column
  phoneNumber: string;

  @Column
  address: string;

  @Column
  legalForm: string;

  @Column
  kindOfActivity: string;

  @HasMany(() => Product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  product: Product[];
}
