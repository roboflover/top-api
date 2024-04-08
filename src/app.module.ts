import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { SсheduleModule } from './sсhedule/sсhedule.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [RoomModule, SсheduleModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})

export class AppModule {}
