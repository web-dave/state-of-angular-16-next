import { Component } from '@angular/core';
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
      inputs: ['appHover: hover'],
    },
  ],
})
export class TitleComponent {}
