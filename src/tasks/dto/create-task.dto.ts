import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import e from 'express';

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
}

export class CreateTaskDto {
  @IsNotEmpty({ message: ' Title is required' })
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsEnum(Priority, { message: 'Priority must be low, medium, or high' })
  priority: Priority;
  
  @IsEnum(TaskStatus, { message: 'Status must be todo, in-progress, or completed' })
  status: TaskStatus;

  @IsNotEmpty({ message: 'Due date is required' })
  dueDate: Date;
}
