import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from 'src/entity/photos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  public async getAllPhotos(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  public async getPhotoById(id: string): Promise<Photo> {
    const photo = this.photoRepository.findOneBy({ id });
    if (!photo) throw new Error('Photo not found');
    return photo;
  }

  public async deletePhotoById(uuid: string): Promise<void> {
    await this.photoRepository.delete(uuid);
  }

  public async postPhoto(photo: Partial<Photo>): Promise<Photo> {
    return this.photoRepository.save(photo);
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
