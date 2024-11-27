import { IsNotEmpty, IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ImagenCatalogo } from '../../entities/catalogoImg.entity';

export class CreateCatalogoDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsOptional()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsString()
  imagen: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImagenCatalogo)
  imagenesAdicionales: ImagenCatalogo[];
}
