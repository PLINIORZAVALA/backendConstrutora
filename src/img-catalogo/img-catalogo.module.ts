import { Module } from '@nestjs/common';
import { ImgCatalogoService } from './img-catalogo.service';
import { ImgCatalogoController } from './img-catalogo.controller';

@Module({
  controllers: [ImgCatalogoController],
  providers: [ImgCatalogoService],
})
export class ImgCatalogoModule {}
