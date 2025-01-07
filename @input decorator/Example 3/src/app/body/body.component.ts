import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonBlockComponent } from '../common-block/common-block.component';
import { CommonButtonComponent } from '../common-button/common-button.component';
import { CommonContentComponent } from '../common-content/common-content.component';
import { title } from 'process';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NavbarComponent, CommonBlockComponent, CommonButtonComponent, CommonContentComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  content_title1 = "We Provide Medical Services"
  content_title2 = "Your Health is Our Priority"
  content_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  block_contents = [
    { title: "About Us", subtitle: "Who We Are", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Our Services", subtitle: "What We Do", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Our Team", subtitle: "Meet Our Doctors", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ]
}
