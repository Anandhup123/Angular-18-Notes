import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-button',
  standalone: true,
  imports: [],
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.css'
})
export class CommonButtonComponent {

  @Input() name!: string;
}
