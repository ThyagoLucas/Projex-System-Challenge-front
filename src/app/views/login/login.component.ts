import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.fb.group({
    email: ['',   [Validators.email, Validators.required]],
    password:['', [Validators.required, Validators.minLength(6)]]
  });


  constructor(private fb: FormBuilder) {}
}
