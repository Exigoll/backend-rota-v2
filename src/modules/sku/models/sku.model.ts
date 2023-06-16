import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
@Table
export class Sku extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  owner_brand_id: string;

  @Column
  article: string;
}
