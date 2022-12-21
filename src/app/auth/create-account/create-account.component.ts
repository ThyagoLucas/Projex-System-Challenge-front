import { NotificationService } from 'src/app/components/template/notification.service';
import { UserCreate } from './../shared/account.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  userCreate: UserCreate;
  createUserForm!: FormGroup;
  
  constructor(private authServ: AuthService, private msg: NotificationService, private router:Router){
    this.userCreate = {name:'', email:'', password:''}
  }


  tryCreateUser():void{
    this.authServ.tryCreateUser(this.userCreate).subscribe(res =>{
      if(res.msg === 'created'){
        console.log('resposta',res)
        this.msg.showMessage('cadastrado com sucesso!');
        this.router.navigate(['login'])
      }}, error => this.msg.showMessage(error.error))

  }

  toLogin():void{
    this.router.navigate(['login'])
  }

  //não consegui implementar
  ngOnInit(): void { 
    this.createUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

}
