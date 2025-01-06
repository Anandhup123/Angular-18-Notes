import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonBlocksComponent } from './common-blocks/common-blocks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonBlocksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';

  students = [
    { image: 'https://www.ourquadcities.com/wp-content/uploads/sites/19/2022/05/Maxwell-Rantilla.jpg?w=540&h=720&crop=1', name: 'John', marks: [100, 90, 80] },
    { image: 'https://th.bing.com/th/id/OIP.GW1gLZKGQ4XvZQHEV9ecIQHaJQ?w=2048&h=2560&rs=1&pid=ImgDetMain', name: 'Jane', marks: [95, 45, 70] },
    { image: 'https://th.bing.com/th/id/OIP.izfpTOHW2eTlPYBGIvq0vgHaJQ?pid=ImgDet&w=474&h=592&rs=1', name: 'Alice', marks: [18, 42, 84] },
    { image: 'https://th.bing.com/th/id/OIP.m0z1SF-ETA9CNB3cUbrUvgHaHt?w=760&h=791&rs=1&pid=ImgDetMain', name: 'Bob', marks: [80, 80, 50] }
  ];

}
