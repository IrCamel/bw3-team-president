import { Component } from '@angular/core';
import { iUser } from '../../models/user';
import { AuthService } from '../auth/auth.service';
import { UserCartService } from './user-cart.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrl: './user-cart.component.scss'
})
export class UserCartComponent {

  constructor(private userSvc: UserCartService, private authSvc: AuthService){
    authSvc.user$.subscribe(user => {
      if(user){
        this.firstName = user.firstName
        this.user = user
      }
    })
  }

  user!: iUser
  firstName!: string

  editUserData(user: Partial<iUser>){
    console.log(user);
    delete user.password
    this.userSvc.editUserData(user).subscribe(newUser =>{
        this.authSvc.authSubject.next(newUser)
    })
  }

}
