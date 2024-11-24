import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Catalogo } from './catalogo.entity';

@Entity('administradores')
export class Administrador {
  @PrimaryGeneratedColumn()
  id_admin: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @OneToOne(() => Usuario, { cascade: true })
  @JoinColumn() // Relación con Usuario
  usuario: Usuario;

  @OneToMany(() => Catalogo, (catalogo) => catalogo.administrador, { cascade: true })
  catalogos: Catalogo[]; // Relación uno-a-muchos con Catálogos
}
