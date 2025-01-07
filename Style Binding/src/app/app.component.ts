import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InlineStyleBindingComponent } from './inline-style-binding/inline-style-binding.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { ConditionalStyleBindingComponent } from './conditional-style-binding/conditional-style-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InlineStyleBindingComponent,
    NgStyleComponent,
    ConditionalStyleBindingComponent,
    PropertyBindingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Project';
}
