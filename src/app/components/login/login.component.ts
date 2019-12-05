import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    userName: [''],
    userPassword: ['']
  })

  constructor(private route: Router,public authService: AuthService, private fb:FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    let user = this.loginForm.controls['userName'].value
    let password = this.loginForm.controls['userPassword'].value
    let teste = this.authService.SignIn(user,password)
    console.log(teste)
  }

}
