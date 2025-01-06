import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonDesignComponent } from './common-design/common-design.component';

@Component({
  selector: 'app-root',
  imports: [CommonDesignComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='Angular_project';

  image1="https://cdn.mos.cms.futurecdn.net/gnG2Z6pK7CTBJmw4pRUy8i.jpg"
  name1="asus Rog";
  description1="Gaming Laptop with high performance and advanced cooling system.";
  price1=100000;

  image2 = "https://cdn.mos.cms.futurecdn.net/2HzsmyJhitHkQkhgWYyY2j-1200-80.jpg";
  name2 = "Dell XPS";
  description2 = "Ultrabook Laptop with sleek design and long battery life.";
  price2 = 120000;

  image3 = "https://th.bing.com/th/id/R.3d06291b74f917da6cca8676b94c2f67?rik=dr%2fxyTPkQl%2bShw&riu=http%3a%2f%2fcdn.mos.cms.futurecdn.net%2fXRA9zN22EKkhUYrqtwXkBZ.jpg&ehk=HS%2bifYXUxcbXYlTLdegecjAK%2bWD1WGnij1LFjEbaoLM%3d&risl=&pid=ImgRaw&r=0";
  name3 = "MacBook Pro";
  description3 = "Professional Laptop with powerful hardware and Retina display.";
  price3 = 150000;

  image4 = "https://th.bing.com/th/id/OIP.npF_yl3KF_0TL-XZbnB1zwHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain";
  name4 = "HP Spectre";
  description4 = "Convertible Laptop with 360-degree hinge and touch screen.";
  price4 = 110000;
}
