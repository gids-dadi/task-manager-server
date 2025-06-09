import { IsEnum, IsOptional } from 'class-validator';

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
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
  dueDate?: Date;
}
