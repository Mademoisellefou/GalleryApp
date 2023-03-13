import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfileDTO, UpdateProfileDTO } from 'src/dto/profiles.dto';
import { Profile } from 'src/entity/profiles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  // public async getProfileById(id: string): Promise<Profile> {
  //   const profile = this.profileRepository.findOneBy({ id });
  //   if (!profile) throw new Error('Profile not found');
  //   return profile;
  // }

  // public async deleteProfileById(uuid: string): Promise<void> {
  //   await this.profileRepository.delete(uuid);
  // }

  public async getAllProfiles(): Promise<Profile[]> {
    return this.profileRepository.find();
  }
  public async postProfile(profile: CreateProfileDTO): Promise<Profile> {
    const newProfile = new Profile();
    newProfile.name = profile.name;
    console.log(`created ${newProfile}`);
    return this.profileRepository.save(newProfile);
  }
  public async updateProfile(profile: UpdateProfileDTO, id: string) {
    const foundProfile = this.profileRepository.findOneBy({
      id: id,
    });
    if (!foundProfile) throw new Error('Profile not found');
    console.log(`updated ${foundProfile}`);
    const curProfile = new Profile();
    curProfile.name = profile.name;
    return this.profileRepository.update(id, curProfile);
  }
}