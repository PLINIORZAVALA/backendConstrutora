import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Catalogo } from './catalogo.entity';

@Entity()
export class ImagenCatalogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ruta_imagen: string;

  @Column()
  descripcion_imagen: string;

  @ManyToOne(() => Catalogo, catalogo => catalogo.imagenesAdicionales)
  catalogo: Catalogo;
}
