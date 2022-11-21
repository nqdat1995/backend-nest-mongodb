import { Injectable } from '@nestjs/common';
import { UserAuthen, UserAuthenResponse } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) { }

    async validateUser(username: string, pass: string): Promise<UserAuthenResponse> {
        const user = await this.userService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            console.log(result);
            return result;
        }
        return null;
    }

    async register(registerUser: UserAuthen) : Promise<UserAuthenResponse> {
        const user = await this.userService.register(registerUser);
        console.log(user);
        return user;
    }
}
