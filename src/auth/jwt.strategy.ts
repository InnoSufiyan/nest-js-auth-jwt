/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "key"
        })
    }

    validate(payload: any): any {
        return payload
        
    }
}