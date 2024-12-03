import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();  // Carga el archivo .env

console.log('JWT_SECRET:', process.env.JWT_SECRET);  // Verifica que JWT_SECRET esté cargado

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*', // Considerar restringir esto en producción
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  });
  await app.listen(3000);
}
bootstrap();
