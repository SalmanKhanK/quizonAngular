import { Component, OnInit } from '@angular/core';
import { StarWarService } from '../star-war.service';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {

  correctOption=[]
  a=0;
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

   truValue(){
    this.starwars.truValue(this.correctOption,this.selectedLink);     
     }
   c=4;
  exampleFlag=true;
  localClick(x){
   this.exampleFlag=this.starwars.localClick(x,this.exampleFlag);     
  }

}
