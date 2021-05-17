import { Profile } from './profile.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile>{}