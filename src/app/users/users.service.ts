import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  getOne(id: string): string {
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
