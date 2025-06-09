import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ControllerModule } from './controller/controller.module';
import { ServiceModule } from './service/service.module';
import { TasksModule } from './tasks/tasks.module';
import { TaskController } from './task/task.controller';

@Module({
  imports: [UsersModule, AuthModule, ControllerModule, ServiceModule, TasksModule],
  controllers: [AppController, TaskController],
  providers: [AppService],
})
export class AppModule {}
