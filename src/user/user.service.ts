import { Body, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user-create.dto';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
    
    get():Promise<User[]>{
        return this.usersRepository.find();
    }

    create(createUserDto:CreateUserDto){
        return createUserDto
    }
    update(updateUserDto:UpdateUserDto, userId:number){
        return {body:updateUserDto,userId}
    }

    show(userId:number){
        return {userId} 
    }

    delete(userId:number){
        return userId
    }
}
