import { IsString, IsOptional } from 'class-validator';

export class CreateCatalogoDto {
  @IsString()
  nombre: string;

  @IsString()
  tipo: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  imagen: string;
}
