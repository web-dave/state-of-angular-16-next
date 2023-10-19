import { Component } from '@angular/core';

@Component({
  selector: 'lazy-three',
  standalone: true,
  template: `Lazy Three`,
})
export class LazyThreeComponent {
  constructor() {
    console.log('Lazy Three Loaded');
  }
}
