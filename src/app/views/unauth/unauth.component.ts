import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauth',
  templateUrl: './unauth.component.html',
  styleUrls: ['./unauth.component.css']
})
export class UnauthComponent {

  constructor(private router: Router){ }


  login():void{
    this.router.navigate(['/login']);
  }

  register():void{
    this.router.navigate(['/cadastro']);
  }



}
