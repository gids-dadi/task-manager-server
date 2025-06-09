import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from '../users/user.entity';

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

  findOne(id: number, userId: number) {
    return this.repo.findOne({ where: { id, user: { id: userId } } });
  }

  update(id: number, dto: Partial<CreateTaskDto>, userId: number) {
    return this.repo.update({ id, user: { id: userId } }, dto);
  }

  delete(id: number, userId: number) {
    return this.repo.delete({ id, user: { id: userId } });
  }
}
