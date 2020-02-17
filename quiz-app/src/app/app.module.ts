import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { QuizTabComponent } from './quiz-tab/quiz-tab.component';
import { OptionTabComponent } from './option-tab/option-tab.component';
import { SubmitTabComponent } from './submit-tab/submit-tab.component';
import{StarWarService} from './star-war.service';

import { from } from 'rxjs';
const routes=[
  {path:"",component:SubmitTabComponent},
  {path:"agay1",component:OptionTabComponent},
  {path:"agay",component:QuizTabComponent},
  {path:"**",redirectTo:'/'}
  
]
@NgModule({
  declarations: [
    AppComponent,
    QuizTabComponent,
    OptionTabComponent,
    SubmitTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
 
  ],
  providers: [StarWarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
