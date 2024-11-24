import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cliente } from './cliente.entity';

@Entity('agendar_citas')
export class AgendarCita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  correo: string;

  @Column({ length: 255 })
  ubicacion: string;

  @Column({ type: 'timestamp' })
  fecha: Date;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @ManyToOne(() => Cliente, (cliente) => cliente.citas, { onDelete: 'CASCADE' })
  cliente: Cliente; // Relación con el cliente
}
