import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private service: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto, @Req() req: any) {
    return this.service.create(dto, req.user.userId);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.service.findAll(req.user.userId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateTaskDto, @Req() req: any) {
    return this.service.update(+id, dto, req.user.userId);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Req() req: any) {
    return this.service.delete(+id, req.user.userId);
  }
}
