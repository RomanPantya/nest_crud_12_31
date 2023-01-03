import { IsEmail, IsNotEmpty, IsNumber, IsString, IsNumberString } from 'class-validator';
import { IUser } from 'src/entities/user.interface';
export class FullUserDto implements IUser {
    
@IsNumberString()
    id: number;
      
@IsString()
@IsNotEmpty()
    name: string;

@IsEmail()
    email: string;

@IsNumber()
    age: number;
}
