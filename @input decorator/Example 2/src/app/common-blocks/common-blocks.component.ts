import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-blocks',
  standalone: true,
  imports: [],
  templateUrl: './common-blocks.component.html',
  styleUrl: './common-blocks.component.css'
})
export class CommonBlocksComponent implements OnInit {

  @Input() studentImg!: string;
  @Input() studentName!: string;
  @Input() marks!: number[];

 totalMark: number = 0;
 averageMark: number = 0;
 status: string = '';
 
  ngOnInit() {
    this.totalMark = this.marks[0] + this.marks[1] + this.marks[2];
    this.averageMark = this.totalMark / 3;
    this.status = this.averageMark >= 200 ? 'Pass' : 'Fail';
  }

}
