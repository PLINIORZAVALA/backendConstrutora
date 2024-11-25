import { PartialType } from '@nestjs/mapped-types';
import { CreateSeccionDto } from './CreateSeccion.dto';

export class UpdateSeccionDto extends PartialType(CreateSeccionDto) {}
