import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePhotoDTO } from 'src/dto/photos.dto';
import { Photo } from 'src/entity/photos.entity';
import { Repository } from 'typeorm';
import { Profile} from 'src/entity/profiles.entity'
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

  // public async updatePhoto(photo: CreatePhotoDTO): Promise<Photo> {
  //   return this.photoRepository.save(photo);
  // }
  public async addPhoto(request : CreatePhotoDTO):Promise<Photo[]> {
    const foundProfile= await this.profileRepository.findOneBy({id:request.idprofile});
    // const profile = await this.profileRepository.findOne({id: request.idprofile});
    console.log(foundProfile);
    return this.photoRepository.find();
    // newPhoto.url = request .url;
    // newPhoto.profile = profile;
    // return this.photoRepo.save(newPhoto);
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
