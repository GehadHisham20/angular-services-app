import { User } from './../Models/user';
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

// @Injectable({
//   providedIn: 'root',
// })
@Injectable()
export class UserService {
  constructor(private logger: LoggerService) {}

  users: User[] = [
    new User('Steve Smith', 'Male', 'Monthly', 'Active'),
    new User('Mery Jane', 'Female', 'Yearly', 'Inactive'),
    new User('Mark Tyler', 'Male', 'Quaterly', 'Active'),
  ];

  GetAllUsers() {
    return this.users;
  }

  CreateUser(name: string, gender: string, subType: string, status: string) {
    const user = new User(name, gender, subType, status);
    this.users.push(user);

    this.logger.LogMessage(name, status);
  }
}
