import { Model } from 'mongoose';
import { UserLoginDto } from 'src/dto/UserLoginDto';
import { UserRegisterDto } from 'src/dto/userRegisterDto';
import { User, UserDocument } from 'src/schemas/user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    login(userLogin: UserLoginDto): Promise<User>;
    findUser(mail: string): Promise<string>;
    register(userRegister: UserRegisterDto): Promise<User>;
}
