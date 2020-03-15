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
  submitted=false;
  // @Output() itemAdded= new EventEmitter<String>();
  private swwars:StarWarService
  constructor(private crudsr:CrudService,swwars:StarWarService) {
    this.swwars=swwars
   
   }
  
  
  email=new FormControl('');
  passwor= new FormControl('');
   permision=false;
  ngOnInit(): void {
    this.crudsr.getMethod().subscribe(
      data=>this.logins=data
    ) 
  }
  recieve;
  em=this.email
  condition:string;
  condition2:string;
  notfound:string
  
  login(){
    
    //  this.username.setValue('Hello world')
      if(this.email.value===""){
        this.condition="Email is required"
      }
      if(this.passwor.value===""){
        this.condition2="Password is required"
      }
   
      for(var i=0;i<this.logins.length;i++){
       // console.log(this.logins[i].Password)
       if(this.email.value===this.logins[i].email && this.passwor.value===this.logins[i].Password){
         this.StudentName=this.logins[i].Fname
         console.log(this.StudentName)
        this.permision=true
       return this.submitted=true
        // this.itemAdded.emit(this.email.value);
         this.recieve=this.email.value;
         console.log(this.recieve)
      
       }
      
      
      }   
      return this.notfound="incorrect Email or Password"
}
get f(){
  return this.email.value
}

    // emailMessage(){
    //  return this.swwars.emailMessage(this.recieve)
    // }
}
