import { IsString, IsOptional } from 'class-validator';

export class CreateCatalogoDto {
  @IsString()
  nombre: string;

  @IsString() 
  @IsOptional()
  descripcion?: string;
}
