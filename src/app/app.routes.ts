import { Routes } from '@angular/router';
import { HoverRouteComponent } from './hover-route/hover-route.component';
import { TitleComponent } from './title/title.component';
import { AtSyntaxComponent } from './at-syntax/at-syntax.component';
import { SignalComponent } from './signals/signal-component';

export const routes: Routes = [
  {
    path: '@',
    component: AtSyntaxComponent,
  },
  {
    path: 'signals',
    component: SignalComponent,
  },
  {
    path: ':appHover',
    component: HoverRouteComponent,
  },
];
