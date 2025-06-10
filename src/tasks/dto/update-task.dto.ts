import { IsEnum, IsOptional } from 'class-validator';

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

export class UpdateTaskDto {
  @IsOptional()
  title?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsEnum(Priority, { message: 'Priority must be low, medium, or high' })
  priority?: Priority;

  @IsOptional()
  @IsEnum(TaskStatus, {
    message: 'Status must be todo, in-progress, or completed',
  })
  status?: 'todo' | 'in-progress' | 'completed';

  @IsOptional()
  dueDate?: Date;
}
