import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
@Table
export class OrderLines extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  owner_order_id: string;

  @Column
  sku_id: string;

  @Column
  supplier_id: string;

  @Column
  qty: string;

  @Column
  supplier_price: string;

  @Column
  client_price: string;
}
