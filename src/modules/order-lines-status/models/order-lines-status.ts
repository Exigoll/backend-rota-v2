import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { OrderStatus } from '@/modules/order-status/models/order-status.model';

@Table({
  timestamps: false,
})
@Table
export class OrderLinesStatus extends Model {
  @ForeignKey(() => OrderStatus)
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  owner_order_line_id: number;

  @Column
  owner_status_id: number;

  @Column
  qty: number;
}
