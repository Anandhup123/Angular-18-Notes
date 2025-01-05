import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContentsComponent } from '../contents/contents.component';
import { BlocksComponent } from '../blocks/blocks.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NavbarComponent,ContentsComponent,BlocksComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
