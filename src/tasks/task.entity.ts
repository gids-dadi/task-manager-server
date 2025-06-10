import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

export type Priority = 'low' | 'medium' | 'high';
export type TaskStatus = 'todo' | 'in-progress' | 'completed';

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

  @Column({
    type: 'enum',
    enum: ['todo', 'in-progress', 'completed'],
    default: 'todo',
  })
  status: TaskStatus;

  @Column()
  dueDate: Date;

  @ManyToOne(() => User)
  user: User;
}
