import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {CreateUserDto} from "./dtos/create-user.dto";
import {UsersService} from "./users.service";
import {UpdateUserDto} from "./dtos/update-user.dto";

@Controller('auth')
export class UsersController {






    constructor(private usersService: UsersService) { }

    @Post('/signup')
    async createUser(@Body() body: CreateUserDto) {
        await this.usersService.create(body.email, body.password)
    }


    @Get('/:id')
    findUser(@Param('id') id: string){
        return this.usersService.findOne(parseInt(id))
    }


    @Get()
    findAllUsers(@Param('email') email: string){
        return this.usersService.find(email)
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string){
        return this.usersService.remove(parseInt(id))
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.usersService.update(parseInt(id), body)
    }

}



