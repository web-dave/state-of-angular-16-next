import { Component } from '@angular/core';

@Component({
  selector: 'lazy-one',
  standalone: true,
  template: `Lazy One`,
})
export class LazyOneComponent {
  constructor() {
    console.log('Lazy One Loaded');
  }
}
