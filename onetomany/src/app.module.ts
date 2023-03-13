import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './configDb';
import { PhotoModule } from './photo/photo.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [dbConfig, ProfileModule, PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
