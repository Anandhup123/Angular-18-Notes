import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {

  cardStyles = {
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
  };

  getBoxStyles() {
    return {
      backgroundColor: 'lightblue',
      border: '1px solid darkblue',
      padding: '20px',
      color: 'navy',
      fontSize: '16px',
      textAlign: 'center',
    };
  }


}
