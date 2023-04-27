import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserLoginDto } from 'src/dto/UserLoginDto';
import { UserRegisterDto } from 'src/dto/userRegisterDto';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async login(userLogin: UserLoginDto): Promise<User> {
    return this.userModel.findOne(userLogin);
  }

  async findUser(mail: string): Promise<string> {
    return this.userModel.findOne({ mail });
  }

  async register(userRegister: UserRegisterDto): Promise<User> {
    const user = new this.userModel(userRegister);
    return user.save();
  }
}
