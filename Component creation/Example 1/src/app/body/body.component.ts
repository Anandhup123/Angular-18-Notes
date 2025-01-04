import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  title="this is the ts content"

  content = "At V-Card, our primary goal is to enhance the accessibility and convenience of vaccination for all individuals. We recognize the vital role vaccination plays in safeguarding public health, and our purpose is to streamline the vaccination process for your benefit"

  bodyImage = "imgs/about-1.jpg"


}
