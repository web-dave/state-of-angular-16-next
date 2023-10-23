import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { map, timer } from 'rxjs';
import { LazyOneComponent } from './lazy-one.component';
import { LazyTwoComponent } from './lazy-two.component';
import { LazyThreeComponent } from './lazy-three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AsyncPipe,
    LazyOneComponent,
    LazyTwoComponent,
    LazyThreeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  obs$ = timer(1500).pipe(map((data) => 'Hello'));
  value = 1;
  title = 'state-of-angular-16-next';
  foo = false;
  liste = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
    { id: 7, name: '7' },
    { id: 8, name: '8' },
  ];
  ping() {
    this.value++;
  }
}
