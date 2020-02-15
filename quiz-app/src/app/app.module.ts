import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{StarWarService} from './star-war.service';
import { AppComponent } from './app.component';
import { QuizTabComponent } from './quiz-tab/quiz-tab.component';
import { OptionTabComponent } from './option-tab/option-tab.component';
import { SubmitTabComponent } from './submit-tab/submit-tab.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    QuizTabComponent,
    OptionTabComponent,
    SubmitTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
 
  ],
  providers: [StarWarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
