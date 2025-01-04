import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodycontentComponent } from './bodycontent/bodycontent.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [BodycontentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='Angular_project';
}
