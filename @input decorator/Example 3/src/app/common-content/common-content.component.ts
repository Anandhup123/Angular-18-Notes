import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-content',
  standalone: true,
  imports: [],
  templateUrl: './common-content.component.html',
  styleUrl: './common-content.component.css'
})
export class CommonContentComponent {

  @Input() title1!: string;
  @Input() title2!: string;
  @Input() text!: string;
  
}
