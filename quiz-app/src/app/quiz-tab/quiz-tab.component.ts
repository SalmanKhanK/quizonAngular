import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { StarWarService } from '../star-war.service';


@Component({
  selector: 'app-quiz-tab',
  templateUrl: './quiz-tab.component.html',
  styleUrls: ['./quiz-tab.component.css']
})
export class QuizTabComponent implements OnInit {

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

   truValue(){
    this.starwars.truValue(this.correctOption,this.selectedLink);     
     }

  exampleFlag=true;
  localClick(x){
   this.exampleFlag=this.starwars.localClick(x,this.exampleFlag);     
  }
 }



