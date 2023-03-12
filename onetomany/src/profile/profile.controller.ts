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
import { CreateProfileDTO } from 'src/dto/profiles.dto';
import { Profile } from 'src/entity/profiles.entity';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  async getProfiles(): Promise<Profile[]> {
    return this.profileService.getAllProfiles();
  }
  @Get(':id')
  async getOneProfile(@Param('id') uuid: string): Promise<Profile> {
    return this.profileService.getProfileById(uuid);
  }
  @Post()
  async postProfile(@Body() request: CreateProfileDTO) {
    return this.profileService.postProfile(request);
  }
  @Delete(':id')
  async deleteProfile(@Param('id') uuid: string) {
    return this.profileService.deleteProfileById(uuid);
  }
}
