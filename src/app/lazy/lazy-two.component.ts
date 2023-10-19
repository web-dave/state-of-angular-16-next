import { Component } from '@angular/core';

@Component({
  selector: 'lazy-two',
  standalone: true,
  template: `Lazy Two`,
})
export class LazyTwoComponent {
  constructor() {
    console.log('Lazy Two Loaded');
  }
}
