import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Profile } from './profiles.entity';
@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  url: string;

  @ManyToOne(() => Profile, (profile) => profile.photos)
  profile: Profile;
}
