import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TitleComponent } from '../title/title.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-bodycontent',
  imports: [NavbarComponent,TitleComponent,ButtonComponent],
  templateUrl: './bodycontent.component.html',
  styleUrl: './bodycontent.component.css'
})
export class BodycontentComponent {

}
