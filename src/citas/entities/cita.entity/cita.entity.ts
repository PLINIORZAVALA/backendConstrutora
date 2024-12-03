import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Proyecto } from '../../../proyectos/entities/proyecto.entity/proyecto.entity';


@Entity('citas')
export class Cita {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
  hora: string;

  @Column({ length: 255 })
  descripcion: string;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.citas)
  proyecto: Proyecto;
}
