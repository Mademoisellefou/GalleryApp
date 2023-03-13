import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePhotoDTO, UpdatePhotoDTO } from 'src/dto/photos.dto';
import { Photo } from 'src/entity/photos.entity';
import { Repository } from 'typeorm';
import { Profile } from 'src/entity/profiles.entity';
@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  // public async getAllPhotos(): Promise<Photo[]> {
  //   return this.photoRepository.find();
  // }

  // public async getPhotoById(id: string): Promise<Photo> {
  //   const photo = this.photoRepository.findOneBy({ id });
  //   if (!photo) throw new Error('Photo not found');
  //   return photo;
  // }

  // // public async deletePhotoById(uuid: string): Promise<void> {
  // //   await this.photoRepository.delete(uuid);
  // // }
  public async getPhotoById(id: string): Promise<Photo> {
    const photo = this.photoRepository.findOneBy({ id });
    if (!photo) throw new Error('photo not found');
    return photo;
  }
  public async updatePhoto(id: string, photo: UpdatePhotoDTO) {
    const myPhoto = await this.getPhotoById(id);
    if (!myPhoto) throw new Error('Photo not found');
    console.log(myPhoto);
    myPhoto.url = photo.url;
    return this.photoRepository.save(myPhoto);
  }
  public async addPhoto(request: CreatePhotoDTO): Promise<Photo> {
    const foundProfile = await this.profileRepository.findOneBy({
      id: request.idprofile,
    });
    if (!foundProfile) throw new Error('Profile not found');
    const newPhoto = new Photo();
    newPhoto.url = request.url;
    newPhoto.profile = foundProfile;
    return this.photoRepository.save(newPhoto);
  }
  //   public async putPhotoById(uuid: string, photo: Partial<Photo>) {
  //     const myPhoto = await this.getPhotoById(uuid);
  //     if (!myPhoto) throw new Error('Photo not found');
  //     myPhoto.name = photo.name;
  //     myPhoto.model = photo.model;
  //     myPhoto.color = photo.color;
  //     myPhoto.description = photo.description;

  //     return this.photoRepository.save(myPhoto);
  //   }
}
