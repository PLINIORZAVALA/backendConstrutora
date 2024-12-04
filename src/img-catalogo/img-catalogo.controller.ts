import { Controller } from '@nestjs/common';
import { ImgCatalogoService } from './img-catalogo.service';

@Controller('img-catalogo')
export class ImgCatalogoController {
  constructor(private readonly imgCatalogoService: ImgCatalogoService) {}
}
