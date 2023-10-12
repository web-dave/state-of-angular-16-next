import { Routes } from '@angular/router';
import { HoverRouteComponent } from './hover-route/hover-route.component';
import { TitleComponent } from './title/title.component';

export const routes: Routes = [
  {
    path: ':appHover',
    component: HoverRouteComponent,
  },
];
