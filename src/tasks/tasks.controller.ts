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
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private service: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto, @Req() req: any) {
    return this.service.create(dto, req.user);
  }

  @Get()
  findAll(@Req() req: any) {
    return this.service.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.service.findOne(+id, req.user.userId);
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
