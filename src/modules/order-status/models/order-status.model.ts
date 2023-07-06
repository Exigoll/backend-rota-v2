import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';

import { OrderLinesStatus } from '@/modules/order-lines-status/models/order-lines-status';

@Table({
  timestamps: false,
})
export class OrderStatus extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasOne(() => OrderLinesStatus)
  order_lines_status: OrderLinesStatus[];
}
