import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauth',
  templateUrl: './unauth.component.html',
  styleUrls: ['./unauth.component.css']
})
export class UnauthComponent implements OnInit {

  constructor(private router: Router, private readonly authSer : AuthService){ }

  login():void{
    this.router.navigate(['/login']);
  }

  register():void{
    this.router.navigate(['/cadastro']);
  }
  
  ngOnInit(){
    
    const token = this.authSer.getToken();
 
    if(token) this.router.navigate([''])
  }

}
