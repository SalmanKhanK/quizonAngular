import { Component } from '@angular/core';
import { StarWarService } from './star-war.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StarWarService]
})
export class AppComponent {
  title = 'quiz-app';
}
