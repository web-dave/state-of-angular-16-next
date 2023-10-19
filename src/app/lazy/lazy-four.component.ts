import { Component } from '@angular/core';

@Component({
  selector: 'lazy-four',
  standalone: true,
  template: `Lazy Four`,
})
export class LazyFourComponent {
  constructor() {
    console.log('Lazy Four Loaded');
  }
}
