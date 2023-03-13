export class CreateProfileDTO {
  id: string;
  name: string;
  photos: string[];
}
export class UpdateProfileDTO {
  name: string;
  profileId: string;
}
