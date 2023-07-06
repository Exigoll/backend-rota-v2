import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
export class Brands extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;
}
