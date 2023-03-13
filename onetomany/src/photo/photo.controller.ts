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
import { CreatePhotoDTO } from 'src/dto/photos.dto';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) {}
  // @Get()
  // async getProfiles(): Promise<Profile[]> {
  //   return this.photoService.getAllProfiles();
  // }
  // @Get(':id')
  // async getOneProfile(@Param('id') uuid: string): Promise<Profile> {
  //   return this.photoService.getProfileById(uuid);
  // }
  @Post()
  async postPhoto(@Body() request: CreatePhotoDTO) {
    return this.photoService.addPhoto(request);
  }
  // @Put(':id')
  // async updateProfile(
  //   @Param('id') id: string,
  //   @Body() request: UpdateProfileDTO,
  // ) {
  //   return this.photoService.updateProfile(request, id);
  // }
  // @Delete(':id')
  // async deleteProfile(@Param('id') uuid: string) {
  //   return this.photoService.deleteProfileById(uuid);
  // }
}
