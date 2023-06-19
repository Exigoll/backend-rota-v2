import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

import { Basket } from '@/modules/basket/models/basket.model';
import { Orders } from '@/modules/orders/models/orders.model';
import { PriceLists } from '@/modules/price-lists/models/price-lists.model';

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

  @ForeignKey(() => PriceLists)
  @Column
  priceListId: string;

  @BelongsTo(() => PriceLists)
  priceList: PriceLists;

  @HasMany(() => Basket, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  basket: Basket[];

  @HasMany(() => Orders, {
    onUpdate: 'CASCADE',
  })
  orders: Orders[];
}
