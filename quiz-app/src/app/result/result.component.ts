import { Component, OnInit } from '@angular/core';
import { Question3Component } from '../question3/question3.component';
import { Question5Component } from '../question5/question5.component';
import { StarWarService } from '../star-war.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  correctOption=[]
  private starwars :StarWarService;
  constructor( starwars:StarWarService) {
          this.starwars=starwars;
   }
  totall;
  percentage;
  Grade="";
  ngOnInit() {
   this.totall=this.starwars.a;
   this.totall=this.totall-1;
   this.percentage=(this.totall/5)*100;
   if(this.percentage>=80){
    this.Grade="A1"
  }
 if(this.percentage>=70 && this.percentage<80){
   this.Grade="A"
 }
 if(this.percentage>=60 && this.percentage<70){
   this.Grade="B"
 }
 if(this.percentage>=50 && this.percentage<60){
   this.Grade="C"
 }
 if(this.percentage<50){
   this.Grade="You are Fail"
 }
   
   }
   
  
 
   
}

