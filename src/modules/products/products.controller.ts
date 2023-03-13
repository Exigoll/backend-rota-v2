import {
  Body,
  Controller,
  Delete,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { ProductDTO } from './dto';
import { ProductService } from './products.service';
import { CreateProductResponse } from './response';

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
  @ApiResponse({ status: 200 })
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteAsset(@Query('id') article: string, @Req() request): Promise<boolean> {
    const { id } = request.user;
    return this.productService.deleteAsset(id, article);
  }
}
