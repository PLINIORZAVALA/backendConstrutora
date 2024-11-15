import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('catalogos')
export class Catalogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  tipo: string;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  @Column({ type: 'varchar', length: 16, nullable: true }) // Cambiado a 'varchar(16)'
  imagen: string;
}
