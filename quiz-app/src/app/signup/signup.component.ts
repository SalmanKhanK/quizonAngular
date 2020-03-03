import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  SignupData= new FormGroup({
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
       this.SignupData.controls['Password'].value!==""){
    
          console.warn(this.SignupData.value);
    }
    else{
      confirm("Password and Confirm Password are not match")
    }
    
   
    
  }

}
