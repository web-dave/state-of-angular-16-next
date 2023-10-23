import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'foo',
  standalone: true,
  template: `With immediate the component is lazy loaded (check the separate
  chunk)`,
})
export class FooComponent implements OnDestroy {
  trigger$ = timer(1500);
  terminator$$ = new Subject<void>();
  constructor() {
    this.trigger$.pipe(takeUntil(this.terminator$$)).subscribe({});
  }
  ngOnDestroy(): void {
    this.terminator$$.next();
    this.terminator$$.complete();
  }
}
