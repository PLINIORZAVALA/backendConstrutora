import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


import { ImagenCatalogo } from './catalogoImg.entity';

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

  @Column({ type: 'varchar', length: 255, nullable: true })
  imagen: string; // Mantenemos este nombre

  @OneToMany(() => ImagenCatalogo, (imagen) => imagen.catalogo, { cascade: true })
  imagenesAdicionales: ImagenCatalogo[]; // Relación uno-a-muchos para las imágenes adicionales
}
