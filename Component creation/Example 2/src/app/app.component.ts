import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';

@Component({
  selector: 'app-root',
  imports: [Card1Component,Card2Component,Card3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='Angular_project';
}
