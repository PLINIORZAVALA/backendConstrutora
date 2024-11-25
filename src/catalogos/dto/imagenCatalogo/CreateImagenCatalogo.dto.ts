import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateImagenCatalogoDto {
  @IsString()
  @IsNotEmpty()
  ruta_imagen: string;

  @IsString()
  @IsOptional()
  descripcion_imagen?: string;

  @IsNotEmpty()
  catalogoId: number; // Relación con Catalogo
}
