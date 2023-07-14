import { Body, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/user-update.dto';
import { CreateUserDto } from './dto/user-create.dto';
import { User } from './entity/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    
    
      constructor(
        @InjectModel(User.name) 
        private userModel: Model<User>) {}

    get():Promise<User[]>{
        return this.userModel.find();
    }

    create(createUserDto:CreateUserDto){
        return new this.userModel(createUserDto).save()
        // const createUser= new this.userModel(createUserDto)
        // return createUser.save()
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
