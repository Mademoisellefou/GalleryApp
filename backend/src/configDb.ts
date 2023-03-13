import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from 'dotenv';
import { Photo } from './entity/photos.entity';
import { Profile } from './entity/profiles.entity';
config();
export const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: 'Meet',
  entities: [Photo, Profile],
  synchronize: true,
});
