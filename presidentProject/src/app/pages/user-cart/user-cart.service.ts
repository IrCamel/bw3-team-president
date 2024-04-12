import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { iProduct } from '../../models/product';
import { iUser } from '../../models/user';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {

  constructor(private http: HttpClient, private authSvc: AuthService) {
    authSvc.user$.subscribe(user => user ? this.user = user : this.user)
  }

  // usersSubj = new BehaviorSubject<iUser[]>([])
  // $users = this.usersSubj.asObservable()
  apiUrl: string = environment.userUrl

  user!: iUser
  total: number = 0
  totalSubj = new BehaviorSubject<number>(0)
  total$ = this.totalSubj.asObservable()

  getUser(user: iUser): Observable<iUser>{
    return this.http.get<iUser>(this.apiUrl+'/'+user.id)
  }

  editUserData(user: Partial<iUser>): Observable<iUser>{
    return this.http.patch<iUser>(this.apiUrl+'/'+user.id, user)
  }

  addToCart(product: iProduct) {
    if (!this.user.cart) {
      this.user.cart = [];
    }
    delete this.user.password
    this.user.cart.push(product);
    this.total += product.price
    this.totalSubj.next(this.total)
    this.editUserData(this.user).subscribe(newUser => {
      this.authSvc.authSubject.next(newUser);
    });
  }

  removeItem(product: iProduct){
      const index = this.user.cart.findIndex(el => el.id == product.id)
      this.user.cart.splice(index, 1)
      this.total -= product.price
      this.totalSubj.next(this.total)
      this.editUserData(this.user).subscribe(newUser => {
        this.authSvc.authSubject.next(newUser);
      });
    }
  }

