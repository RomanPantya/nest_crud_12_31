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
    async getOne(id: number): Promise<UserEntity> {
        return this.usersRepository.findOne({
            where: {
                id
            }
        });
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

    async remove(id: number): Promise<any> {
        return this.usersRepository.delete({id});
    }

    update(id: string, updateUser: UpdateUserDto): object {
        return { message: `user with id: ${id} was update`, data: updateUser };
    }
}
