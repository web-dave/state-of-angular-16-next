import { Component } from '@angular/core';
import { FooComponent } from '../foo.component';
import { AsyncPipe } from '@angular/common';
import { map, timer } from 'rxjs';
import { TitleComponent } from '../title/title.component';
import { LazyOneComponent } from '../lazy/lazy-one.component';
import { LazyTwoComponent } from '../lazy/lazy-two.component';
import { LazyThreeComponent } from '../lazy/lazy-three.component';
import { LazyFourComponent } from '../lazy/lazy-four.component';

@Component({
  selector: 'at-syntax',
  standalone: true,
  imports: [
    FooComponent,
    TitleComponent,
    AsyncPipe,
    LazyOneComponent,
    LazyTwoComponent,
    LazyThreeComponent,
    LazyTwoComponent,
    LazyFourComponent,
  ],
  templateUrl: 'at-syntax.component.html',
})
export class AtSyntaxComponent {
  index = 0;
  show = true;
  obs$ = timer(1500).pipe(map((data) => 'Hello'));
  message = 'hello';
  items: { id: number; label: string }[] = [
    { id: 1, label: 'foo' },
    { id: 2, label: 'bar' },
    { id: 3, label: 'baz' },
    { id: 4, label: 'hello' },
    { id: 5, label: 'world' },
  ];
}
