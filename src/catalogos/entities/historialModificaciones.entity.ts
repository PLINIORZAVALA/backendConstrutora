import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Catalogo } from './catalogo.entity';

@Entity('historial_modificaciones')
export class HistorialModificaciones {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Column({ length: 100 })
  autor: string;

  @Column({ type: 'text' })
  datoModificado: string;

  @ManyToOne(() => Catalogo, (catalogo) => catalogo.historialModificaciones, { onDelete: 'CASCADE' })
  catalogo: Catalogo; // Relación con el catálogo
}
