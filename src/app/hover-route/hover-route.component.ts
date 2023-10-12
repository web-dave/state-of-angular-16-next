import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-hover-route',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './hover-route.component.html',
  styleUrls: ['./hover-route.component.scss'],
})
export class HoverRouteComponent {
  @Input() appHover = '';
}
