import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import config from 'config';

import { AuthModule } from '@/modules/auth/auth.module';
import { BasketModule } from '@/modules/basket/basket.module';
import { Basket } from '@/modules/basket/models/basket.model';
import { BrandsModule } from '@/modules/brands/brands.module';
import { Brands } from '@/modules/brands/models/brands.model';
import { OfferPrices } from '@/modules/offer-prices/models/offer-prices.model';
import { OfferPricesModule } from '@/modules/offer-prices/offer-prices.module';
import { PriceLists } from '@/modules/price-lists/models/price-lists.model';
import { PriceListsModule } from '@/modules/price-lists/price-lists.module';
import { SkuNames } from '@/modules/sku-names/models/sku-names.model';
import { SkuNamesModule } from '@/modules/sku-names/sku-names.module';
import { Sku } from '@/modules/sku/models/sku.model';
import { SkuModule } from '@/modules/sku/sku.module';
import { SupplierOffers } from '@/modules/supplier-offers/models/supplier-offers';
import { SupplierOffersModule } from '@/modules/supplier-offers/supplier-offers.module';
import { Suppliers } from '@/modules/suppliers/models/suppliers.model';
import { SuppliersModule } from '@/modules/suppliers/suppliers.module';
import { TokenModule } from '@/modules/token/token.module';
import { User } from '@/modules/users/models/user.model';
import { UsersModule } from '@/modules/users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        port: configService.get('db_port'),
        host: configService.get('db_host'),
        username: configService.get('db_user'),
        password: configService.get('db_password'),
        database: configService.get('db_name'),
        synchronize: true,
        autoLoadModels: true,
        models: [
          User,
          Basket,
          Brands,
          Sku,
          SkuNames,
          Suppliers,
          SupplierOffers,
          OfferPrices,
          PriceLists,
        ],
      }),
    }),
    UsersModule,
    AuthModule,
    TokenModule,
    BasketModule,
    BrandsModule,
    SkuModule,
    SkuNamesModule,
    SuppliersModule,
    SupplierOffersModule,
    OfferPricesModule,
    PriceListsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
