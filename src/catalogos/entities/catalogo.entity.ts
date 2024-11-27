import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { ImagenCatalogo } from './catalogoImg.entity';  // Importando la entidad ImagenCatalogo
import { HistorialModificaciones } from './historialModificaciones.entity';
import { Cliente } from './cliente.entity';
import { Administrador } from './admin.entity';

@Entity('catalogos')  // Nombre de la tabla en la base de datos
export class Catalogo {
  @PrimaryGeneratedColumn()
  id: number;  // Identificador único del catálogo

  @Column({ length: 100 })
  nombre: string;  // Nombre del catálogo

  @Column({ length: 100 })
  tipo: string;  // Tipo del catálogo

  @Column({ length: 255, nullable: true })
  descripcion: string;  // Descripción del catálogo

  @Column({ type: 'varchar', length: 255, nullable: true })
  imagen: string;  // Imagen principal del catálogo

  @OneToMany(() => ImagenCatalogo, (imagen) => imagen.catalogo, { cascade: true })
  imagenesAdicionales: ImagenCatalogo[];  // Relación uno a muchos con las imágenes adicionales

  @OneToMany(() => HistorialModificaciones, (historial) => historial.catalogo, { cascade: true })
  historialModificaciones: HistorialModificaciones[];  // Relación uno a muchos con el historial de modificaciones

  @OneToMany(() => Cliente, (cliente) => cliente.catalogo, { cascade: true })
  clientes: Cliente[];  // Relación uno a muchos con los clientes

  @ManyToOne(() => Administrador, (administrador) => administrador.catalogos, { nullable: true })
  administrador: Administrador;  // Relación muchos a uno con el administrador
}
