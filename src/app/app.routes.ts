import { Routes } from '@angular/router';
import { HoverRouteComponent } from './hover-route/hover-route.component';
import { TitleComponent } from './title/title.component';
import { AtSyntaxComponent } from './at-syntax/at-syntax.component';

export const routes: Routes = [
  {
    path: '@',
    component: AtSyntaxComponent,
  },
  {
    path: ':appHover',
    component: HoverRouteComponent,
  },
];
