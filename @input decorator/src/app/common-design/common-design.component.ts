import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-design',
  imports: [],
  templateUrl: './common-design.component.html',
  styleUrl: './common-design.component.css'
})
export class CommonDesignComponent {

  @Input() productName: string = "";
  @Input() productDescription: string = "";
  @Input() productPrice=0;
  @Input() productImage: string = "";
}
