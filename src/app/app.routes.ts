import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
=======
>>>>>>> @diogo/database
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
<<<<<<< HEAD
    path: 'login',
    component: LoginLayoutComponent,
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
=======
    path: "",
    component: LoginComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
>>>>>>> @diogo/database
];
