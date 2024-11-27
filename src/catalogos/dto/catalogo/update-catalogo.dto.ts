import { IsOptional, IsString, IsArray, IsInt } from 'class-validator';

export class UpdateCatalogoDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  tipo?: string;

  @IsOptional()
  @IsString()
  imagen?: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  eliminarImagenesAdicionales?: number[];

  @IsOptional()
  @IsArray()
  imagenesAdicionales?: Array<{
    ruta_imagen: string;
    descripcion_imagen: string;
  }>;
}
