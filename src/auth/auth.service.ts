/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/user.entity";


@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {
        
    }

    generateToken(payload: User) : string{
        return this.jwtService.sign(payload)
    }
}