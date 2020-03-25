import { Component, OnInit } from '@angular/core';
import { StarWarService } from './star-war.service';
import { Router } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StarWarService]
})
export class AppComponent implements OnInit {
  title = 'quiz-app';
  routerr:Router
  constructor(router:Router) {
    this.routerr=router
  }
  links=['/agay','/agay1','/question3','/question4','/question5']
  timeLeft=60
  finish;
  ngOnInit(){
   
  }
  timeStart(){
    setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
    
      else{
        this.routerr.navigate(['/result']);
      }
     
    },1000)
    
  }
  
  
}
