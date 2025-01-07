import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style-binding',
  standalone: true,
  imports: [],
  templateUrl: './inline-style-binding.component.html',
  styleUrl: './inline-style-binding.component.css'
})
export class InlineStyleBindingComponent {

  color: string = 'blue';
  fontSize: string = '16px';
}
