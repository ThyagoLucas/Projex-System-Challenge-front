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

  set tokin(v : string) {
    this.token.token = v;
  }

   tryLogin(){

    try {
      this.authServ.tryLogin(this.userLogin).subscribe(value => { this.token.token = value.token});

      if(this.token.token){
        this.msg.showMessage('login efetuado com sucesso');
        window.localStorage.setItem('token', this.token.token);
        this.router.navigate(['home']);
      }
    } catch (error) {
      
      console.log(this.token)
      this.msg.showMessage('dados invalidos, tente novamente!');
    } 
    
  }

  toCreate():void{
    this.router.navigate(['cadastro'])
  }
 
}
