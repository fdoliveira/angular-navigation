import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./navigation/auth/auth.routes').then(r => r.AUTH_ROUTES), },
  { path: 'admin', loadChildren: () => import('./navigation/admin/admin.routes').then(r => r.ADMIN_ROUTES), },
];
