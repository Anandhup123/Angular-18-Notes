import { Component } from '@angular/core';
import { CommonButtonComponent } from '../common-button/common-button.component';
import { CommonLinkComponent } from '../common-link/common-link.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonButtonComponent,CommonLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  links = ['Home', 'About', 'Contact', 'Services', 'Blog'];
}
