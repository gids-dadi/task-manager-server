import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export class CreateTaskDto {
  @IsNotEmpty({ message: ' Title is required' })
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsEnum(Priority, { message: 'Priority must be low, medium, or high' })
  priority: Priority;

  @IsNotEmpty({ message: 'Due date is required' })
  dueDate: Date;
}
