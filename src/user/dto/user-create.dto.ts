import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    name:string;

    @IsEmail()
    email:number;

   
}