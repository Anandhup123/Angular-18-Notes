import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-style-binding',
  standalone: true,
  imports: [],
  templateUrl: './conditional-style-binding.component.html',
  styleUrl: './conditional-style-binding.component.css'
})
export class ConditionalStyleBindingComponent {

  isHigh: boolean = false;

  isHighlighted: boolean = true;

  
}
