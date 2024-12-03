import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateCatalogoDto {
  @IsNumber()
  id: number; // Se incluye el ID como parte del DTO

  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  tipo?: string;

  @IsString()
  @IsOptional()
  imagen?: string;
}
