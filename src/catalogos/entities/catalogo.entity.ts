import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { ImagenCatalogo } from './catalogoImg.entity';
import { HistorialModificaciones } from './historialModificaciones.entity';
import { Cliente } from './cliente.entity';
import { Administrador } from './admin.entity';

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
  imagen: string;

  @OneToMany(() => ImagenCatalogo, (imagen) => imagen.catalogo, { cascade: true })
  imagenesAdicionales: ImagenCatalogo[];

  @OneToMany(() => HistorialModificaciones, (historial) => historial.catalogo, { cascade: true })
  historialModificaciones: HistorialModificaciones[];

  @OneToMany(() => Cliente, (cliente) => cliente.catalogo, { cascade: true })
  clientes: Cliente[];

  @ManyToOne(() => Administrador, (administrador) => administrador.catalogos, { nullable: true })
  administrador: Administrador; // Relación muchos-a-uno con Administrador
}
