import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './_guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch:'full',
  },
  {
    path: 'auth',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signUp',
        component: SignUpComponent,
      },
    ],
  },

  {
    path: 'home',
    component: HomeLayoutComponent,

    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
