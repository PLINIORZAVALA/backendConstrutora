import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entity/user.entity'; // Importar el modelo de usuario

@Entity('citas')
export class Cita {
  @PrimaryGeneratedColumn()
  id: number; // ID único de la cita

  @Column({ type: 'varchar', length: 100 })
  nombre: string; // Nombre de la persona que solicita la cita

  @Column({ type: 'varchar', length: 100 })
  apellido: string; // Apellido de la persona que solicita la cita

  @Column({ type: 'varchar', length: 100 })
  email: string; // Correo electrónico de la persona

  @Column({ type: 'varchar', length: 15, nullable: true })
  telefono: string; // Teléfono de contacto del solicitante (opcional)

  @Column({ type: 'datetime' })
  fecha: Date; // Fecha y hora de la cita

  @Column({ type: 'varchar', length: 255, nullable: true })
  motivo: string; // Motivo de la cita (opcional)

  @Column({ type: 'varchar', length: 20, default: 'pendiente' })
  estado: string; // Estado de la cita (pendiente, confirmada, cancelada)

  @ManyToOne(() => User, user => user.id)  // Relación con el modelo de User
  @JoinColumn({ name: 'usuario_id' }) // Establecer nombre de la columna que une las tablas
  usuario: User;  // Usuario que está gestionando o creando la cita

  @CreateDateColumn({ type: 'timestamp' })
  fechaCreacion: Date; // Fecha en la que se registró la cita

  @UpdateDateColumn({ type: 'timestamp' })
  fechaActualizacion: Date; // Última fecha en la que se actualizó la cita
}
