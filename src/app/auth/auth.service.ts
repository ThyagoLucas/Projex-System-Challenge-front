import { Injectable } from '@angular/core';
import { NotificationService } from '../components/template/notification.service';
import { Token, UserLogin } from './shared/account.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private showMessage: NotificationService) { }

  async tryLogin(user:UserLogin){

    const token = await this.http.post<Token>(environment.endPoint+'/login', user).toPromise()
    console.log(token);

    if(token && token.token){
      window.localStorage.setItem('token', token.token);
      return true
    }

    return false;

  }
 
}
