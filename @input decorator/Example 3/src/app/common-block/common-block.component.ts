import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-block',
  standalone: true,
  imports: [],
  templateUrl: './common-block.component.html',
  styleUrl: './common-block.component.css'
})
export class CommonBlockComponent {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() content!: string;
  
}
