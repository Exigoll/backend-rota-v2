import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
export class PriceLists extends Model {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;
}
