import { Profile } from './../modules/profile/profile.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

}