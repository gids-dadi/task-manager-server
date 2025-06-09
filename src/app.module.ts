import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ControllerModule } from './controller/controller.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [UsersModule, AuthModule, ControllerModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
