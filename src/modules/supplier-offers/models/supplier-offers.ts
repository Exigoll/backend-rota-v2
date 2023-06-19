import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
@Table
export class SupplierOffers extends Model {
  @PrimaryKey
  @Column
  supplier_id: string;

  @Column
  sku_id: string;

  @Column
  base_price: string;

  @Column
  qty: string;
}
