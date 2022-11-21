import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy, UsersService],
  controllers: [AuthController]
})
export class AuthModule { }
