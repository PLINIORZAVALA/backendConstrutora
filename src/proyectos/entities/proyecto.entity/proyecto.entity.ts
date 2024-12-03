import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cita } from '../../../citas/entities/cita.entity/cita.entity';  // Asegúrate de que la ruta esté correcta

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Cita, (cita) => cita.proyecto)
  citas: Cita[];
}
