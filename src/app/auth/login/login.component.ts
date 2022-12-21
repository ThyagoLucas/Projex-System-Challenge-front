import { Router } from '@angular/router';
import { Token, UserLogin, UserCreate } from './../shared/account.model';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NotificationService } from 'src/app/components/template/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userLogin:UserLogin;
  token:Token = {token:''} ;

  constructor(private authServ: AuthService, private msg: NotificationService, private router: Router){ 
    this.userLogin = {
      email:'', password:''
    }
  }

  tryLogin(){

    if(this.token.token){
      this.msg.showMessage('login efetuado com sucesso');
      window.localStorage.setItem('token', this.token.token);
      this.router.navigate(['home']);
    }else{
      this.authServ.tryLogin(this.userLogin).subscribe(
      (value) => this.token.token = value.token, 
      (error) => this.msg.showMessage(error.error))
    }
  } 
      
  toCreate():void{
    this.router.navigate(['cadastro'])
  }
 
}
