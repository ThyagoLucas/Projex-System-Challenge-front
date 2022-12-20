import { Injectable } from '@angular/core';
import { NotificationService } from '../components/template/notification.service';
import { Token, UserLogin, UserCreate } from './shared/account.model';
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
    return this.http.post<Token>('ec2-54-159-134-30.compute-1.amazonaws.com/login', user);
  }

  tryCreateUser(userCreate:UserCreate): Observable<any>{
    return this.http.post<any>(environment.endPoint+'/register', userCreate);
  }

}
