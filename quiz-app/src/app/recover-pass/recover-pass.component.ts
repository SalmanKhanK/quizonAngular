import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employe } from '../employe';

@Component({
  selector: 'app-recover-pass',
  templateUrl: './recover-pass.component.html',
  styleUrls: ['./recover-pass.component.css']
})
export class RecoverPassComponent implements OnInit {
   crudSrv:CrudService
   ObjPut:Employe[]
  constructor(private crudSr:CrudService) {
       this.crudSrv=crudSr
   }
   logins=[]
  putEmploye
  ngOnInit(){
    this.crudSrv.getMethod().subscribe(
      data=>this.logins=data
    ) 
 
}
email=new FormControl('');
password= new FormControl('');
Cpassword=new FormControl('');
updated=""
checked:boolean
id:Number;
Update(){
  this.putEmploye=new Employe();
  if(this.email.value==="" || this.password.value==="" || this.Cpassword.value===""){
   return this.updated="Some fields are invalid";
    
  }
  for(var i=0;i<this.logins.length;i++){
             if(this.email.value===this.logins[i].email){
                     this.id=this.logins[i].id
                     console.log(this.id)
                     this.putEmploye.Password=this.password.value;
                     this.putEmploye.Cpassword=this.Cpassword.value;
                     this.putEmploye.Fname=this.logins[i].Fname
                     this.putEmploye.Lname=this.logins[i].Lname
                     this.putEmploye.email=this.logins[i].email
                     this.checked=true
             }
  }
  
if(this.password.value===this.Cpassword.value && this.checked==true){
  return this.crudSrv.putMethod(this.id,this.putEmploye).subscribe(data=>{
          this.ObjPut=data;
        this.updated="Your password updated successfully"
  })
}
else if(this.password.value!==this.Cpassword.value){
    return this.updated="Password is not matched"
}
else if(this.checked!==true){
  this.updated="Email not found"
}
}
   

  }
 

