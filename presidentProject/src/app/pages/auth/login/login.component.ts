import { Component } from '@angular/core';
import { iLoginData } from '../../../models/login-data';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginData: iLoginData = {email: '', password: ''}

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

    signIn(){
      this.authSvc.login(this.loginData)
      .subscribe(data => {
        this.router.navigate(['/userCart'])
      })
    }

}
