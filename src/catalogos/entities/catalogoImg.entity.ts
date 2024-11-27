import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Catalogo } from './catalogo.entity';

@Entity('imagenes_catalogo')
export class ImagenCatalogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ruta_imagen: string;

  @Column()
  descripcion_imagen: string;

  @ManyToOne(() => Catalogo, (catalogo) => catalogo.imagenesAdicionales)
  @JoinColumn({ name: 'catalogoId' })  // Esto es suficiente para manejar la relación
  catalogo: Catalogo;

  // Si decides mantener la columna 'catalogoId', lo harías así:
  // @Column()
  // catalogoId: number;
}
