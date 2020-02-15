import{Injectable} from '@angular/core';
@Injectable()
export class StarWarService{
 
    correctOption=["SQL"]
  get(){
    return this.correctOption;
  }
   
    onValue(el:string,selectedLink){
        return selectedLink=el;
    }
  
    isonValue(tru:string,selectedLink):boolean{
         if(!selectedLink){
           return false;
         }
         return (selectedLink===tru);
        
    }

   truValue(correctOption,selectedLink){
     for(const f in correctOption){
      if (correctOption[f]===selectedLink) {
         return console.log("Oh Yess");
      }
       }
  
       
     }

  localClick(x,exampleFlag) {
  if(x==1){
    return exampleFlag=false; 
  }
 
  
  }
  
}