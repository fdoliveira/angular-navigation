import { Routes } from "@angular/router";

export const ADMIN_ROUTES: Routes = [
  {
    path: '', loadComponent: () => import('./admin.component').then(c => c.AdminComponent),
    children: [
      { path: 'workspace', loadComponent: () => import('../../views/admin/workspace/workspace.component').then(c => c.WorkspaceComponent) },
    ]
  },
  { path: '**', redirectTo: ''}
];
