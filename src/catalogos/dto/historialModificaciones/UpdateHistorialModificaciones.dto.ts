import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialModificacionesDto } from './CreateHistorialModificaciones.dto';

export class UpdateHistorialModificacionesDto extends PartialType(CreateHistorialModificacionesDto) {}
