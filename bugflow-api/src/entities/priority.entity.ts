
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('priorities')
export class Priority {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  level!: string; // Low, Medium, High
}
