import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { OrderStatus } from './models/order-status.model';
import { OrderStatusController } from './order-status.controller';
import { OrderStatusService } from './order-status.service';

@Module({
  imports: [SequelizeModule.forFeature([OrderStatus])],
  providers: [OrderStatusService],
  controllers: [OrderStatusController],
})
export class OrderStatusModule {}
