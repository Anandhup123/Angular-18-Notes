import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-link',
  standalone: true,
  imports: [],
  templateUrl: './common-link.component.html',
  styleUrl: './common-link.component.css'
})
export class CommonLinkComponent {
  @Input() link!: string;
}
