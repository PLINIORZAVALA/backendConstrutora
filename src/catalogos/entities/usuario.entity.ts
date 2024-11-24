import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Seccion } from './seccion.entity';
@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150, unique: true })
  correo: string;

  @Column({ length: 255 })
  contrasena: string;

  @Column({ length: 50 })
  rol: string;

  @OneToOne(() => Seccion, (seccion) => seccion.usuario, { cascade: true })
  seccion: Seccion;
}
