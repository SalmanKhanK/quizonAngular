import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuizTabComponent } from './quiz-tab/quiz-tab.component';
import { OptionTabComponent } from './option-tab/option-tab.component';
import { SubmitTabComponent } from './submit-tab/submit-tab.component';
import{StarWarService} from './star-war.service';

import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { CrudService } from './crud.service';
import { Question3Component } from './question3/question3.component';
import { Question4Component } from './question4/question4.component';
import { Question5Component } from './question5/question5.component';
import { ResultComponent } from './result/result.component';
import { TimerComponent } from './timer/timer.component';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';
const routes=[
  {path:"",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"start",component:SubmitTabComponent},
  {path:"agay1",component:OptionTabComponent},
  {path:"agay",component:QuizTabComponent},
  {path:"question3",component:Question3Component},
  {path:"question4",component:Question4Component},
  {path:"question5",component:Question5Component},
  {path:"result",component:ResultComponent},
  {path:"recover",component:RecoverPassComponent},
  {path:"**",redirectTo:'/'},
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    QuizTabComponent,
    OptionTabComponent,
    SubmitTabComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    Question3Component,
    Question4Component,
    Question5Component,
    ResultComponent,
    TimerComponent,
    RecoverPassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  
 
  ],
  providers: [StarWarService,CrudService,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
