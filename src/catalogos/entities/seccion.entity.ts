import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('secciones')
export class Seccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  estado: string;

  @OneToOne(() => Usuario, (usuario) => usuario.seccion)
  @JoinColumn()
  usuario: Usuario;
}
