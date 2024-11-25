import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './CreateUsuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}
