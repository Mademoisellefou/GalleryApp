import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/entity/profiles.entity';
import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';
import { Photo } from 'src/entity/photos.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Photo,Profile])],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class ProfileModule {}
