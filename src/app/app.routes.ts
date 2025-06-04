import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: LoginLayoutComponent,

    children: [
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
    path: '',
    component: HomeLayoutComponent,

    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];
