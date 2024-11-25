import { Controller } from '@nestjs/common';
import { ImgCatalogoService } from './img_catalogo.service';

@Controller('img-catalogo')
export class ImgCatalogoController {
  constructor(private readonly imgCatalogoService: ImgCatalogoService) {}
}
