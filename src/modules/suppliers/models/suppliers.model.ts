import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
@Table
export class Suppliers extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  stock: boolean;
}
