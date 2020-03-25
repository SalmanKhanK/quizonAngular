import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }
  @Output() time=new EventEmitter<number>();
  timeLeft: number = 15;
  ngOnInit(): void {
    setInterval(() => {
      if(this.timeLeft > 0) {
        this.time.emit(this.timeLeft--)
      }
      else{
        console.log("Break")
      }
     
    },1000)
  }
 



}
