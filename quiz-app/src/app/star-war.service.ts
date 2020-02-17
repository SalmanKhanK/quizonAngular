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
    a=1;
   truValue(correctOption,selectedLink){
     for(const f in correctOption){
      if (correctOption[f]===selectedLink) {
        console.log(this.a);
         return this.a=this.a+1;
         
      }
       }
  
       
     }

  localClick(x,exampleFlag) {
  if(x==1){
    return exampleFlag=false; 
  }
 
  
  }
  
}