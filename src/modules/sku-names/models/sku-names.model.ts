import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
@Table
export class SkuNames extends Model {
  @PrimaryKey
  @Column
  owner_sku_id: string;

  @Column
  name: string;
}
