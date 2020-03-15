import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../star-war.service';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component implements OnInit {

  correctOption=[]
  private starwars :StarWarService;
  constructor( starwars:StarWarService) {
          this.starwars=starwars;
   }
  
  ngOnInit() {
    this.correctOption=this.starwars.get();
  }
    private selectedLink : string="";
    onValue(el:string){
        this.selectedLink=this.starwars.onValue(el,this.selectedLink);
    }

    // isonValue(tru:string)
    //  {
    //  return this.starwars.isonValue(tru,this.selectedLink);
    // }
    c=5;
   truValue(){
    this.starwars.truValue(this.correctOption,this.selectedLink);     
     }

  exampleFlag=true;
  localClick(x){
   this.exampleFlag=this.starwars.localClick(x,this.exampleFlag);     
  }
}
