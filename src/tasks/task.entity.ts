import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

export type Priority = 'low' | 'medium' | 'high';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  priority: Priority;

  @Column()
  dueDate: Date;

  @ManyToOne(() => User)
  user: User;
}
