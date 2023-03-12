export class CreateProfileDTO {
  id: string;
  name: string;
  photos: string[];
}
export class UpdateProfileDTO {
  profileId: string;
  photoId: string;
}
