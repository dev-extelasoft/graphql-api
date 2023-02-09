import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { serverSettings } from './configs/server.config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const {port, stage} = serverSettings;

  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(port, () => {
    logger.log(`${ stage } server is now listening on the port: ${ port }`)
  });
}

bootstrap();
