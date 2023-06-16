import { Column, HasMany, Model, Table } from 'sequelize-typescript';

import { Basket } from '@/modules/basket/models/basket.model';

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

  @HasMany(() => Basket, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  basket: Basket[];
}
