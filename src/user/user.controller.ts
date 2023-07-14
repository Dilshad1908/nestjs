import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user-create.dto';

@Controller('user')
export class UserController {
constructor(private userService:UserService){}

    @Get()
    getUsers(){
        return this.userService.get()
    }

    @Post()
    store(@Body() createUserDto:CreateUserDto){
        return this.userService.create(createUserDto)
    }

    @Patch('/:userId')
    update(@Body() updateUserDto:UpdateUserDto, @Param('userId',ParseIntPipe) userId:number){
        return this.userService.update(updateUserDto,userId)
    }

    @Get('/:userId')
    getUser(@Param('userId',ParseIntPipe) userId:number){
        return this.userService.show(userId) 
    }

    @Delete('/:userId')
    deleteUser(@Param('userId',ParseIntPipe) userId:number){
        return this.userService.delete(userId) 
    }


    

}
