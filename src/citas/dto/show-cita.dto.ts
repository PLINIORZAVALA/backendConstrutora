import { IsString, IsEmail, IsOptional, IsDateString, IsPhoneNumber } from 'class-validator';

export class ShowCitaDto {
  @IsString()
  nombre: string; // Nombre de la persona solicitando la cita

  @IsString()
  apellido: string; // Apellido de la persona solicitando la cita

  @IsEmail()
  email: string; // Correo electrónico de la persona solicitante

  @IsPhoneNumber(null, { message: 'Número de teléfono no válido' })
  @IsOptional()
  telefono: string; // Teléfono de contacto, opcional

  @IsDateString()
  fecha: Date; // Fecha y hora de la cita

  @IsString()
  @IsOptional()
  motivo: string; // Motivo de la cita, opcional

  @IsString()
  estado: string; // Estado de la cita (pendiente, confirmada, cancelada)

  @IsString()
  usuario: string; // Nombre del usuario administrador que gestionó la cita

  @IsDateString()
  fechaCreacion: Date; // Fecha de creación de la cita

  @IsDateString()
  fechaActualizacion: Date; // Fecha de la última actualización de la cita
}
