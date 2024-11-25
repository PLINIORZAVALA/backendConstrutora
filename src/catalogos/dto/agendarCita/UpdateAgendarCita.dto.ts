import { PartialType } from '@nestjs/mapped-types';
import { CreateAgendarCitaDto } from './CreateAgendarCita.dto';

export class UpdateAgendarCitaDto extends PartialType(CreateAgendarCitaDto) {}
