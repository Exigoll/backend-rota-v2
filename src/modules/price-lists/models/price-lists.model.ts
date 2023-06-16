import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
export class PriceLists extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;
}
