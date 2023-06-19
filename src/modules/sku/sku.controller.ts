import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '@/guards/jwt-guard';

import { SkuDTO } from './dto';
import { SkuResponse } from './response';
import { SkuService } from './sku.service';

@Controller('sku')
export class SkuController {
  constructor(private readonly skuService: SkuService) {}

  @ApiTags('API')
  @ApiResponse({ status: 201, type: SkuResponse })
  @UseGuards(JwtAuthGuard)
  @Post('create')
  createSku(@Body() skuDto: SkuDTO): Promise<SkuResponse> {
    return this.skuService.createSku(skuDto);
  }
}
