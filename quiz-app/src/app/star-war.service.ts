import{Injectable} from '@angular/core';

import { Observable, Subscriber, Subscription, timer } from 'rxjs';
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
     
    
  
    Name;
    email1;
  login(email,passwor,permision,logins){
   
  
    for(var i=0;i<logins.length;i++){
     // console.log(this.logins[i].Password)
     if(email.value===logins[i].email && passwor.value===logins[i].Password){
       this.Name=logins[i].Fname
       console.log(this.Name)
      this.email1=logins[i].email
     return permision=true
      // this.itemAdded.emit(this.email.value);
      
     }
    
    
    }   
    return permision=false
  }
  
  localClick(x,exampleFlag) {
  if(x==1){
    return exampleFlag=false; 
  }
 
  
  }
 
}
    
 
  // emailMessage(emails){
  //      return emails
  // }
  
