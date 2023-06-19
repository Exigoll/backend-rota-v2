import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { Basket } from './models/basket.model';

@Module({
  imports: [SequelizeModule.forFeature([Basket])],
  controllers: [BasketController],
  providers: [BasketService],
})
export class BasketModule {}
