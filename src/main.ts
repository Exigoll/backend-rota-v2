import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from '@/modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'http://rotazap.ru',
        'http://rotazap.ru/auth/register',
        'http://www.rotazap.ru',
        'https://www.rotazap.ru',
        'https://rotazap.ru',
      ],
      /* origin: ['http://localhost:5174'], */
      credentials: true,
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
    },
  });
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('rota api')
    .setDescription('This api for rota')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
