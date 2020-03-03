import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email=new FormControl('');
  passwor= new FormControl('');
   user='user@gmail.com';
   pass='pass';
   permision=false;
  ngOnInit(): void {
  }
  login(){
    //  this.username.setValue('Hello world')
    if(this.email.value===this.user && this.passwor.value===this.pass){
        this.permision=true
       
    }
    else{
      confirm("invalid Username or Password")
    }
}

}
