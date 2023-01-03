import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
    ) {}
    getOne(id): string {
        return 'user ' + id;
    }

    getAll(): string {
        return 'Thats all users';
    }

    create(createUser: CreateUserDto): object {
        return { message: `This user was create`, data: createUser };
    }

    remove(id: string) {
        return 'This user was delete: ' + id;
    }

    update(id: string, updateUser: UpdateUserDto): object {
        return { message: `user with id: ${id} was update`, data: updateUser };
    }
}
