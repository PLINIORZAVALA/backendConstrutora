import { IsString, IsOptional, IsArray, IsUrl } from 'class-validator';
import { ImagenCatalogoDto } from './imagen-catalogo.dto';

export class UpdateCatalogoDto {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  tipo?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  imagen?: string; // Imagen principal (opcional)

  @IsArray()
  @IsOptional()
  imagenesAdicionales?: ImagenCatalogoDto[]; // Relación con las imágenes adicionales
}
