/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './auth/role.guard';
import { CONSTANTS } from './constants';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {

  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    //authentication completed
    //id jwt token is generated then authorization is done
    return this.authService.generateToken(req.user)
  }

  @Get('/profile/androidDeveloper')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  getProfileAndroid() {
    return 'profile'
  }
  @Get('/profile/webDeveloper')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  getProfileWebDeveloper() {
    return 'profile'
  }
}
