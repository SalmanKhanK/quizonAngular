import { Component, OnInit, Input,ViewChild,AfterContentInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { StarWarService } from '../star-war.service';
import { CrudService } from '../crud.service';
import { AppComponent } from '../app.component';
import { inject } from '@angular/core/testing';
@Component({
  selector: 'app-submit-tab',
  templateUrl: './submit-tab.component.html',
  styleUrls: ['./submit-tab.component.css'],

})
export class SubmitTabComponent extends LoginComponent implements OnInit {
  // @ViewChild(LoginComponent) login;
 arr;
 
  constructor( crudsr:CrudService,starwars:StarWarService) {
 
       super(crudsr,starwars);
       console.log(this.arr)
       }
    
  
  // func(){
  //  return this.arr="123456"
  // }
  
   
  // @Input() emailmessage:string;

  // ngOnInit(): void {
  // }
  
  

 ngOnInit():void{
    //  this.email=this.swwars.emailMessage;
    // this.emails=this.login.recieve;
    
 }
 
    
  // recieve:string;
  // ngAfterViewInit(){
  //   this.recieve=this.login.recieve
  // }
  // Onitem(email){
  //    return this.emails=email          
  // }
}
