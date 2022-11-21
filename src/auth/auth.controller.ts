import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserAuthen, UserAuthenResponse } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return req.user;
    }

    @Post('register')
    async register(@Body() user: UserAuthen) : Promise<UserAuthenResponse> {
        return this.authService.register(user);
    }
}
