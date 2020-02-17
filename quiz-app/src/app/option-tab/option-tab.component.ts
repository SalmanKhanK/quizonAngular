import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { StarWarService } from '../star-war.service';


@Component({
  selector: 'app-option-tab',
  templateUrl: './option-tab.component.html',
  styleUrls: ['./option-tab.component.css']
})
export class OptionTabComponent implements OnInit {
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

  exampleFlag=true;
  localClick(x){
   this.exampleFlag=this.starwars.localClick(x,this.exampleFlag);     
  }
 }

