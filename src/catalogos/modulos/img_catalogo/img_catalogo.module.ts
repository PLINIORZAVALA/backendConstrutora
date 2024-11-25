import { Module } from '@nestjs/common';
import { ImgCatalogoService } from './img_catalogo.service';
import { ImgCatalogoController } from './img_catalogo.controller';

@Module({
  controllers: [ImgCatalogoController],
  providers: [ImgCatalogoService],
})
export class ImgCatalogoModule {}
