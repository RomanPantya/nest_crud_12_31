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

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

  @Get(':id')
    getOne(@Param('id') id: string): string {
        return this.usersService.getOne(id);
    }

  @Get()
  getAll(): string {
      return this.usersService.getAll();
  }

  @Post()
  create(@Body() createUser: CreateUserDto): object {
      return this.usersService.create(createUser);
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
