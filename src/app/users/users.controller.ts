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
// import { FindOneParams } from 'src/util/findOneParams';
import { UserEntity } from 'src/entities/user.entity';
import { QueryParams } from 'src/util/query-params';
import { UserSelectDto } from './dto/user-select-query.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

  @Get(':id')
    // findOne(@Param('id') id: number) { useGlobalPipes {transform: tru} change string to number
    // findOne(@Param('id', ParseIntPipe) id: number) {
    // findOne(@Param() id: FindOneParams) {
    findOne(
      @Param('id') id: number,
      @Query() { select }: UserSelectDto,
    ): Promise<UserEntity> {
        return this.usersService.getOne(id, select);
      
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
  remove(@Param('id') id: number): Promise<any> {
      return this.usersService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUser: UpdateUserDto): Promise<UserEntity> {
      return this.usersService.update(id, updateUser);
  }
}
