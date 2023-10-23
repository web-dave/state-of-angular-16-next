import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Signal, computed, signal } from '@angular/core';
import {
  toObservable,
  toSignal,
  takeUntilDestroyed,
} from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
@Component({
  template: `
    <button (click)="_oneUp()">1up</button>
    <pre>{{ user1() | json }}</pre>
    <pre>is Adult: {{ adult() }}</pre>
  `,
  standalone: true,
  imports: [JsonPipe, CommonModule],
})
export class SignalComponent {
  user1 = signal({ name: 'Ulla', age: 16 });
  adult: Signal<boolean> = computed(() => this.user1().age >= 18);

  user1$: Observable<{
    name: string;
    age: number;
  }> = toObservable(this.user1);
  pets$: Observable<string[]> = of(['Dog', 'Cat']);
  pets: Signal<string[] | undefined> = toSignal(this.pets$);
  oneUp() {
    this.user1.update((value) => {
      value.age++;
      return value;
    });
  }
  _oneUp() {
    this.user1.set({ name: 'Paul', age: 12 });
    this.user1.update((value) => {
      value.age++;
      return { ...value };
    });
  }
}
