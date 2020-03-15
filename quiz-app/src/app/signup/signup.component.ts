import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  successful:string;
  Reset;
  constructor(private crudsr:CrudService ) { }
  logins=[];
  ngOnInit(): void {
    this.crudsr.getMethod().subscribe(
      data=>this.logins=data
    )
    
  }
  already;
  SignupData = new FormGroup({
    Fname:new FormControl('',Validators.required),
    Lname:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required, Validators.email,
    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
    Password:new FormControl('',Validators.required),
    Cpassword:new FormControl('',Validators.required)
  })
  get f(){
    return this.SignupData.controls;
  }
  onSubmit(){
    
    this.submitted=true;
    if(this.SignupData.controls['Password'].value===this.SignupData.controls['Cpassword'].value && 
       this.SignupData.controls['Password'].value!=="" && this.SignupData.controls['Fname'].value!==""
      && this.SignupData.controls['Lname'].value!=="" && this.SignupData.controls['email'].invalid!==true){
        for(var i=0;i<this.logins.length;i++){

          if(this.SignupData.controls['email'].value===this.logins[i].email){
             return this.already="Already Email Exist"
               break;
          }
           
        } 
        this.crudsr.postMethod(this.SignupData.value).subscribe(user=>
          this.successful="Your Form Submitted Successfully"
          
          )
       this.already="";
      return this.reset();

     
    
  }
    else{
      confirm("Some fields are invalid")
    }
  }
  reset(){
    return this.SignupData.reset();
  }

  

}
