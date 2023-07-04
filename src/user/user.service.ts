/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { CONSTANTS } from "src/constants";

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      password: '12345678',
      email: 'user1@mail.com',
      age: 20,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER
    },
    {
      username: 'user2',
      password: '12345678',
      email: 'user2@mail.com',
      age: 20,
      role: CONSTANTS.ROLES.WEB_DEVELOPER
    },
    {
      username: 'user3',
      password: '12345678',
      email: 'user3@mail.com',
      age: 20,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER
    },
  ]

  getUserByUsername(username: string): User {
    return this.users.find(user => user.username === username);
  }
}