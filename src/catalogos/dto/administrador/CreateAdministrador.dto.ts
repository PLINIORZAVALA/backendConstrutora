import { IsString, IsNotEmpty, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCatalogoDto } from '../catalogo/create-catalogo.dto';
import { CreateUsuarioDto } from '../usuario/CreateUsuario.dto';

export class CreateAdministradorDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @ValidateNested()
  @Type(() => CreateUsuarioDto) // Asociación con Usuario
  usuario: CreateUsuarioDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCatalogoDto) // Asociación con Catálogos
  catalogos: CreateCatalogoDto[];
}
