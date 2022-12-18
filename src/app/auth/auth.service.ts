import { Injectable } from '@angular/core';
import { NotificationService } from '../components/template/notification.service';
import { Token, UserLogin } from './shared/account.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:Token;

  constructor(private http: HttpClient, private showMessage: NotificationService, private router:Router) {
    this.token = {token:''}
   }

  tryLogin(user:UserLogin): Observable<Token>{

    return this.http.post<Token>(environment.endPoint+'/login', user);

  }

 
 
}
