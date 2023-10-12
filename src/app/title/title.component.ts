import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from '../hover.directive';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  hostDirectives: [
    {
      directive: HoverDirective,
      inputs: ['appHover'],
    },
  ],
})
export class TitleComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('==>', changes);
  }
}
