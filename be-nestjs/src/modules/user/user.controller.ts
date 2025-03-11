import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Inject,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  CreateUserDto,
  UserRegistrationDTO,
  UserUpdateDTO,
} from './dto/user.dto';
import { IUserService } from 'src/modules/user/interface';
import { USER_SERVICE } from 'src/modules/user/interface/user-di.token';
import { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE) private readonly userService: UserService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('me')
  @HttpCode(HttpStatus.OK)
  async ProfileMe(
    @Req() req:Request
  ) {
    const {email} = req.user
    return this.userService.profile(email)
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findUserById(
    @Param('id') id:string
  ) {
    return await this.userService.findOneById(id)
  }

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('sortBy') sortBy: string = 'createdAt',
    @Query('order') order: string = 'desc',
  ) {
    page = Math.max(1, page);
    limit = Math.max(1, limit);
    return this.userService.findAll({}, { page, limit });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UserUpdateDTO) {
   
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
