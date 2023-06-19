import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
@Table
export class OrderLinesStatus extends Model {
  @PrimaryKey
  @Column
  owner_order_line_id: string;

  @Column
  owner_status_id: string;

  @Column
  qty: string;
}
