// src/users/entity/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;  // Asegúrate de que esta propiedad esté presente

  @Column({ nullable: true })
  role: string;
}
