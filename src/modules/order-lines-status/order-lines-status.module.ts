import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { OrderLines } from '../order-lines/models/order-lines.model';

import { OrderLinesStatus } from './models/order-lines-status';
import { OrderLinesStatusController } from './order-lines-status.controller';
import { OrderLinesStatusService } from './order-lines-status.service';

@Module({
  imports: [SequelizeModule.forFeature([OrderLinesStatus, OrderLines])],
  providers: [OrderLinesStatusService],
  controllers: [OrderLinesStatusController],
})
export class OrderLinesStatusModule {}
