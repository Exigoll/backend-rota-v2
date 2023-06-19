import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { OrderLines } from './models/order-lines.model';
import { OrderLinesController } from './order-lines.controller';
import { OrderLinesService } from './order-lines.service';

@Module({
  imports: [SequelizeModule.forFeature([OrderLines])],
  providers: [OrderLinesService],
  controllers: [OrderLinesController],
})
export class OrderLinesModule {}
