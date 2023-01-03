import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindOneParams } from 'src/util/findOneParams';
import { UserEntity } from 'src/entities/user.entity';
import { QueryParams } from 'src/util/query-params';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

  @Get(':id')
    // findOne(@Param('id') id: number) { useGlobalPipes {transform: tru} change string to number
    // findOne(@Param('id', ParseIntPipe) id: number) {
    findOne(@Param() id: FindOneParams) {
        return 'this action return a user';
    }

  @Get()
  getAll(@Query() query: QueryParams): Promise<UserEntity[]> {
      return this.usersService.getAll(query);
  }

  @Post()
  create(@Body() createUser: CreateUserDto): Promise<UserEntity> {
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
