import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  AssignPhotoDTO,
  CreatePhotoDTO,
  UpdatePhotoDTO,
} from 'src/dto/photos.dto';
import { Photo } from 'src/entity/photos.entity';
import { PhotoService } from './photo.service';
@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) {}
  @Get()
  async getProfiles(): Promise<Photo[]> {
    return this.photoService.getAllPhotos();
  }
  // @Get(':id')
  // async getOneProfile(@Param('id') uuid: string): Promise<Profile> {
  //   return this.photoService.getProfileById(uuid);
  // }
  @Post()
  async postPhoto(@Body() request: CreatePhotoDTO) {
    return this.photoService.addPhoto(request);
  }
  @Put(':id')
  async updatePhoto(@Param('id') id: string, @Body() request: UpdatePhotoDTO) {
    return this.photoService.updatePhoto(id, request);
  }
  @Put('asign/:id')
  async assignPhoto(@Param('id') id: string, @Body() request: AssignPhotoDTO) {
    return this.photoService.asignPhoto(id, request);
  }
  @Get('allphotos')
  async allPhotos() {
    return this.photoService.getProfilesAndPhotos();
  }
  // @Delete(':id')
  // async deleteProfile(@Param('id') uuid: string) {
  //   return this.photoService.deleteProfileById(uuid);
  // }
}
