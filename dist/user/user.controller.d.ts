import { Response } from 'express';
import { UserLoginDto } from 'src/dto/UserLoginDto';
import { UserRegisterDto } from 'src/dto/userRegisterDto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(findUserDto: UserLoginDto, res: Response): Promise<void>;
    register(createUserDto: UserRegisterDto, res: Response): Promise<void>;
}
