import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserAuthen, UserAuthenResponse } from './dto/user.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    private readonly users: UserAuthen[] = [
        {
            userId: 1,
            username: 'admin',
            password: 'admin'
        },
        {
            userId: 2,
            username: 'guest',
            password: 'guest'
        }
    ];

    async findOne(username: string): Promise<UserAuthen | undefined> {
        //return this.users.find(user => user.username == username);
        return this.userModel.findOne({ username: username }).lean();
    }

    async register(registerUser: UserAuthen) : Promise<UserAuthenResponse> {
        const { username } = registerUser;
        const user = await this.userModel.findOne({ username });
        if (user)
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        const createdUser = new this.userModel(registerUser);
        await createdUser.save();
        return this.santizeUser(createdUser);
    }

    santizeUser(user: UserDocument): UserAuthenResponse {
        const santized: UserAuthenResponse = user.toObject();
        delete santized['password'];
        return santized;
    }
}
