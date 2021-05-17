import { CreateUserDto } from './../../dto/create-user.dto';

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUsers() {
        return await this.userService.getAll();
    }
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.userService.findById(id);
    }
    
    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: CreateUserDto) {
        return await this.userService.create(dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.userService.delete(id)
    }

}
