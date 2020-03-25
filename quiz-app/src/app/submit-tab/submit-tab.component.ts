import { Component, OnInit, Input,ViewChild,AfterContentInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { StarWarService } from '../star-war.service';
import { CrudService } from '../crud.service';
import { AppComponent } from '../app.component';
import { inject } from '@angular/core/testing';
import { TimerComponent } from '../timer/timer.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-submit-tab',
  templateUrl: './submit-tab.component.html',
  styleUrls: ['./submit-tab.component.css'],

})
export class SubmitTabComponent  implements OnInit {
  // @ViewChild(LoginComponent) login;
 arr;
 
   starwars:StarWarService;
   Appcomp:AppComponent

  constructor( private crudsr:CrudService,starwars:StarWarService,AppComp:AppComponent) {
       this.starwars=starwars;
       this.Appcomp=AppComp;
        this.arr=starwars.Name;
       }
     timer(){
      return this.Appcomp.timeStart()
     }
     
    
   
    
   
      
    
  
  // func(){
  //  return this.arr="123456"
  // }
  
   
  // @Input() emailmessage:string;

  // ngOnInit(): void {
  // }
 


 ngOnInit():void{
  
   }
 }
 
    
  // recieve:string;
  // ngAfterViewInit(){
  //   this.recieve=this.login.recieve
  // }
  // Onitem(email){
  //    return this.emails=email          
  // }

