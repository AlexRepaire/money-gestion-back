import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserLoginDto } from 'src/dto/UserLoginDto';
import { UserRegisterDto } from 'src/dto/userRegisterDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  async login(@Body() findUserDto: UserLoginDto, @Res() res: Response) {
    try {
      const result = await this.userService.login(findUserDto);
      if (result) {
        res.status(HttpStatus.ACCEPTED).json(result);
      } else {
        throw "identifiant incorrect ou le compte n'existe pas";
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }

  @Post('/register')
  async register(@Body() createUserDto: UserRegisterDto, @Res() res: Response) {
    try {
      const exist = await this.userService.findUser(createUserDto.mail);
      if (exist) {
        throw "L'utilisateur existe déjà";
      }
      const result = await this.userService.register(createUserDto);
      if (result) {
        res.status(HttpStatus.CREATED).json(result);
      } else {
        throw "Erreur à l'inscription";
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
}
