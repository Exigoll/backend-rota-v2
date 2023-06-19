import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
@Table
export class OrderStatus extends Model {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;
}
