import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
@Table
export class OfferPrices extends Model {
  @PrimaryKey
  @Column
  price_list_id: string;

  @Column
  supplier_id: string;

  @Column
  sku_id: string;

  @Column
  price: string;
}
