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
    async getOne(id: number, select: (keyof UserEntity)[]): Promise<UserEntity> {
        return this.usersRepository.findOne({
            where: {
                id
            }, 
            select,
        });
    }

    getAll(query): Promise<UserEntity[]> {
        return this.usersRepository.find({
            skip: query.skip,
            take: query.limit
        });
    }

    create(createUser: CreateUserDto): Promise<UserEntity> {

        return this.usersRepository.save(createUser);
    }

    async remove(id: number) {
        return this.usersRepository.delete({id});
    }

    async update(id: number, updateUser: UpdateUserDto): Promise<any> {
        return this.usersRepository.update({id}, {name: updateUser.name, age: updateUser.age});
    }
}
