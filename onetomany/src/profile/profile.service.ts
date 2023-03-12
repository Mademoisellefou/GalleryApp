import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfileDTO, UpdateProfileDTO } from 'src/dto/profiles.dto';
import { Photo } from 'src/entity/photos.entity';
import { Profile } from 'src/entity/profiles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  public async getAllProfiles(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  public async getProfileById(id: string): Promise<Profile> {
    const profile = this.profileRepository.findOneBy({ id });
    if (!profile) throw new Error('Profile not found');
    return profile;
  }

  public async deleteProfileById(uuid: string): Promise<void> {
    await this.profileRepository.delete(uuid);
  }

  public async postProfile(profile: CreateProfileDTO): Promise<Profile> {
    const newProfile = new Profile();
    newProfile.name = 'lib';
    const photo = new Photo();
    newProfile.photos = [photo];
    return this.profileRepository.save(newProfile);
  }
  public async updateProfile(profile: UpdateProfileDTO): Promise<Profile[]> {
    const foundProfile = this.profileRepository.findOneBy({
      id: profile.profileId,
    });
    if (!foundProfile) throw new Error('Profile not found');
    console.log((await foundProfile).photos);
    return this.profileRepository.find();
  }
}
