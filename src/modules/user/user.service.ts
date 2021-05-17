import { CreateUserDto } from './../../dto/create-user.dto';
import { MessageDto } from './../../shared/message.dto';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  async getAll(): Promise<User[]> {
    const list = await this.userRepository.find();
    if(!list.length) {
        throw new NotFoundException(new MessageDto('Not users found'));
    }
    return list;
  }

  async findById(id:number): Promise<User> {
      const user = await this.userRepository.findOne(id);
      if(!user) {
          throw new NotFoundException(new MessageDto('User does not exist'));
      }
      return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.userRepository.findOne({ username: username });
    return user;
}

  async create(dto: CreateUserDto): Promise<any> {
      const exists = await this.findByUsername(dto.username);
      if(exists) throw new BadRequestException(new MessageDto('Username already exists'));
      const user = this.userRepository.create(dto);
      await this.userRepository.save(user);
      return new MessageDto(`User ${user.username} has been registered`);
  }

  async delete(id: number): Promise<any> {
      const user = await this.findById(id);
      await this.userRepository.delete(user);
      return new MessageDto(`User ${user.username} has been deleted`);
  }
}
