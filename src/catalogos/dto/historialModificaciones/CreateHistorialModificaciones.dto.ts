import { IsString, IsNotEmpty } from 'class-validator';

export class CreateHistorialModificacionesDto {
  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsString()
  @IsNotEmpty()
  datoModificado: string;

  @IsNotEmpty()
  catalogoId: number; // Relación con Catalogo
}
