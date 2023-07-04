/* eslint-disable prettier/prettier */
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/user/user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super()
    }

    validate(username: string, password: string): User {
        const user : User = this.userService.getUserByUsername(username);
        if(user === undefined) throw new UnauthorizedException();
        if(user.password === password) {
            return user
        } else {
            throw new UnauthorizedException()
        }
    }
}