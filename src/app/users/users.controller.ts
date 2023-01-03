import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindOneParams } from 'src/util/findOneParams';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

  @Get(':id')
    getOne(@Param() id: FindOneParams) {
        return 'this action return a user';
    }

  @Get()
  getAll(): string {
      return this.usersService.getAll();
  }

  @Post()
  create(@Body() createUser: CreateUserDto) {
      return 'This action adds a new user';
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
      return this.usersService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUser: UpdateUserDto): object {
      return this.usersService.update(id, updateUser);
  }
}
