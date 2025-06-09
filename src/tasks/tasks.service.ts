import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from '../users/user.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  create(dto: CreateTaskDto, user: User) {
    const task = this.repo.create({ ...dto, user });
    return this.repo.save(task);
  }

  findAll(userId: number) {
    return this.repo.find({ where: { user: { id: userId } } });
  }

  // update(id: number, dto: Partial<UpdateTaskDto>, userId: number) {
  //   const updatedTask = this.repo.update({ id, user: { id: userId } }, dto);
  //   return updatedTask;
  // }

  async update(id: number, dto: Partial<UpdateTaskDto>, userId: number) {
    // First, update the task
    await this.repo.update({ id, user: { id: userId } }, dto);

    // Then fetch and return the updated task
    const updatedTask = await this.repo.findOne({
      where: { id, user: { id: userId } },
    });

    if (!updatedTask) {
      throw new NotFoundException(
        'Task not found or you do not have permission to update it',
      );
    }

    return updatedTask;
  }

  delete(id: number, userId: number) {
    return this.repo.delete({ id, user: { id: userId } });
  }
}
