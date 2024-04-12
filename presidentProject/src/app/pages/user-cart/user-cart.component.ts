import { Component } from '@angular/core';
import { iUser } from '../../models/user';
import { AuthService } from '../auth/auth.service';
import { UserCartService } from './user-cart.service';
import { iProduct } from '../../models/product';

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
        userSvc.getUser(user).subscribe(user => {
          this.cart = user.cart
          this.cart.forEach(el => this.total += el.price)
        })
      }
    })
  }

  cart!: iProduct[]
  user!: iUser
  firstName!: string

  total: number = 0

  editUserData(user: Partial<iUser>){
    console.log(user);
    delete user.password
    user.cart = this.cart
    this.userSvc.editUserData(user).subscribe(newUser =>{
        this.authSvc.authSubject.next(newUser)
    })
  }

}
