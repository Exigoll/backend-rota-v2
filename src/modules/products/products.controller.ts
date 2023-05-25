import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { ProductDTO } from './dto';
import { Product } from './models/products.model';
import { ProductService } from './products.service';
import { CreateProductResponse, GetUserAssetsResponse } from './response';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: CreateProductResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createAsset(
    @Body() assetDto: ProductDTO,
    @Req() request,
  ): Promise<CreateProductResponse> {
    const user = request.user;
    return this.productService.createAsset(user, assetDto);
  }

  @ApiTags('API')
  @ApiResponse({
    status: 200,
    type: GetUserAssetsResponse,
  })
  @UseGuards(JwtAuthGuard)
  @Get('get-elements')
  getUserAssets(@Req() request): Promise<Product[]> {
    const user = request.user;
    return this.productService.getUserAssets(user.id);
  }

  @ApiTags('API')
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteAsset(@Query('id') article: string, @Req() request): Promise<boolean> {
    const { id } = request.user;
    return this.productService.deleteAsset(id, article);
  }
}
