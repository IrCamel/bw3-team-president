import { UserCartService } from './../../pages/user-cart/user-cart.service';
import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../pages/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    isMenuCollapsed = true;
  show: boolean = false;
  isUserLoggedIn: boolean = false;
  isAdmin: boolean = false

  constructor(private authSvc: AuthService, private userSvc: UserCartService) { }

  ngOnInit() {
    this.authSvc.isLoggedIn$.subscribe(data => {
      this.isUserLoggedIn = data;
      this.isAdmin = this.authSvc.isAdmin
    })
  }

  logout() {
    this.userSvc.totalSubj.next(0)
    this.authSvc.logout()
  }
}
