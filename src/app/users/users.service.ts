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

    async getAll(query): Promise<UserEntity[]> {
        return this.usersRepository.find({
            skip: query.skip,
            take: query.limit
        });
    }

    async create(createUser: CreateUserDto): Promise<UserEntity> {

        return this.usersRepository.save(createUser);
    }

    remove(id: string) {
        return 'This user was delete: ' + id;
    }

    update(id: string, updateUser: UpdateUserDto): object {
        return { message: `user with id: ${id} was update`, data: updateUser };
    }
}
