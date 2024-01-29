import { Routes } from "@angular/router";

export const AUTH_ROUTES: Routes = [
  {
    path: '', loadComponent: () => import('./auth.component').then(c => c.AuthComponent),
    children: [
      { path: 'login', loadComponent: () => import('../../views/auth/login/login.component').then(c => c.LoginComponent) },
      { path: 'register', loadComponent: () => import('../../views/auth/register/register.component').then(c => c.RegisterComponent) },
    ]
  },
  { path: '**', redirectTo: ''}
];
