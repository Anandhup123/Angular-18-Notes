import { Component } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { CompanyNameComponent } from '../company-name/company-name.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonsComponent,CompanyNameComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
