import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// @Entity() → Menandakan class ini adalah tabel di database
@Entity() 
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;
}
