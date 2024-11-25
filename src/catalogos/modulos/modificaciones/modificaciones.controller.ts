import { Controller } from '@nestjs/common';
import { ModificacionesService } from './modificaciones.service';

@Controller('modificaciones')
export class ModificacionesController {
  constructor(private readonly modificacionesService: ModificacionesService) {}
}
