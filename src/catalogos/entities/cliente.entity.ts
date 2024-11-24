import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Catalogo } from './catalogo.entity';
import { AgendarCita } from './agendarCita.entity';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @ManyToOne(() => Catalogo, (catalogo) => catalogo.clientes, { onDelete: 'CASCADE' })
  catalogo: Catalogo; // Relación con el catálogo

  @OneToMany(() => AgendarCita, (cita) => cita.cliente, { cascade: true })
  citas: AgendarCita[]; // Relación con las citas
}
