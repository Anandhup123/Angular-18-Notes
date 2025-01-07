import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {

  btnStyle={
    color: 'white',
    backgroundColor: 'blue',
    fontSize: '16px',
    padding: '10px 20px'
  }


  imgStyle={
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '2px solid pink'
  }
}
