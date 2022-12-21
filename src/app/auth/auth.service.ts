import { Injectable } from '@angular/core';
import { NotificationService } from '../components/template/notification.service';
import { Token, UserLogin, UserCreate, UserCreated } from './shared/account.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private showMessage: NotificationService, private router:Router) {}

  tryLogin(user:UserLogin): Observable<Token>{
    return this.http.post<Token>(environment.endPoint+'/login', user);
  }

  tryCreateUser(userCreate:UserCreate):Observable<UserCreated>{
    return this.http.post<UserCreated>(environment.endPoint+'/register', userCreate);

  }
  getToken():string |boolean {
    const token = window.localStorage.getItem('token');

    return token? token : false;
  }


}
