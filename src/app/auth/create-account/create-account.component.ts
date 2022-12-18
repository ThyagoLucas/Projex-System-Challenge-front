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
    this.userCreate = {name:'', email:'', password:''}}

  tryCreateUser():void{

    console.log('entrou')

    const response = this.authServ.tryCreateUser(this.userCreate).subscribe(
      (res) =>{
        console.log(res)
        this.msg.showMessage('cadastrado com sucesso!')
        this.router.navigate(['login'])
    }, (erro) =>{
      this.msg.showMessage('falha, tente novamente')
    });

    
   
  }

  toLogin():void{
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }


  //analisar depois
  get name(){
    return this.createUserForm.get('name')!;
  }

  get email(){
    return this.createUserForm.get('email')!;
  }

  get password(){
    return this.createUserForm.get('password')!;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  




}
