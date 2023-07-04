/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext } from "@nestjs/common";

export class RoleGuard implements CanActivate {

    private rolePassed: string;

    constructor(role: string) {
        this.rolePassed = role;
    }


    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const request: any = ctx.getRequest();
        return this.rolePassed === request.user.role;
    }
}