import { PartialType } from '@nestjs/mapped-types';
import { CreateAdministradorDto } from './CreateAdministrador.dto';
export class UpdateAdministradorDto extends PartialType(CreateAdministradorDto) {}
