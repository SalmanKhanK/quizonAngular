import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {FormControl } from '@angular/forms';
import { CrudService } from '../crud.service';
import { StarWarService } from '../star-war.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  StudentName;
  logins=[];
  
  // @Output() itemAdded= new EventEmitter<String>();
  private swwars:StarWarService
  constructor(private crudsr:CrudService,swwars:StarWarService) {
    this.swwars=swwars
   
   }
  
  
  email=new FormControl('');
  passwor= new FormControl('');
   permision:boolean;
  ngOnInit(): void {
    this.crudsr.getMethod().subscribe(
      data=>this.logins=data
    ) 
  }
  recieve;
  em=this.email
  condition;
  condition2="";
  submitted=false;
  get fl(){
    return this.passwor.value;
  }
  
  login(){
    
    //  this.username.setValue('Hello world')
    if(this.email.value==="" || this.passwor.value===""){
   return this.condition="Please Enter Email Or Password"
    }
// else if(this.email.value){
 
//  return this.notfound=this.swwars.login(this.email,this.passwor,this.permision,this.StudentName,this.notfound,this.logins)
// }
else{
this.condition="";
  return this.permision=this.swwars.login(this.email,this.passwor,this.permision,this.logins) 
}
  }
get f(){
  return this.email.value
}

    // emailMessage(){
    //  return this.swwars.emailMessage(this.recieve)
    // }
}
