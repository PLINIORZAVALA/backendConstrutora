import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Catalogo } from './catalogo.entity';

@Entity('imagenes_catalogo')
export class ImagenCatalogo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  ruta_imagen: string;

  @Column({ length: 255, nullable: true })
  descripcion_imagen: string;

  @ManyToOne(() => Catalogo, (catalogo) => catalogo.imagenesAdicionales, { onDelete: 'CASCADE' })
  catalogo: Catalogo; // Relación muchos-a-uno
}
