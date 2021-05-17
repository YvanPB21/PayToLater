import { Profile } from './../modules/profile/profile.entity';
export class ResponseUserDto {
    public id:number;
    public username: string;
    public status: string;
    public createdAt: Date;
    public updatedAt: Date;
}