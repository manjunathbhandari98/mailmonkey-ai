import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { AuthGuard } from './guards/auth-guard';
import { GuestGuard } from './guards/guest-guard';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { EmailGenerator } from './pages/email-generator/email-generator';
import { EmailImprover } from './pages/email-improver/email-improver';
import { EmailOutput } from './pages/email-output/email-output';
import { History } from './pages/history/history';
import { Home } from './pages/home/home';
import { Settings } from './pages/settings/settings';
import { TemplateCategory } from './pages/templates/template-category/template-category';
import { Templates } from './pages/templates/templates';

export const routes: Routes = [



  // Auth
  // Public routes but blocked for logged-in users
  { path: '', component: Home, canActivate: [GuestGuard] },
  { path: 'login', component: Login, canActivate: [GuestGuard] },
  { path: 'register', component: Register, canActivate: [GuestGuard] },
  { path: 'forgot-password', component: ForgotPassword, canActivate: [GuestGuard] },

  // Protected layout wrapper
  {
    path: '',
    component: Layout,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'generate', component: EmailGenerator },
      { path: 'output', component: EmailOutput },
      { path: 'templates', component: Templates },
      { path: 'history', component: History },
      { path: 'settings', component: Settings },
      {path:'generate-email',component:EmailGenerator},
      {path:'improve-email',component:EmailImprover},
      {path:'templates',component:Templates},
      {path:'history', component:History},
      {path:'templates/category/:slug', component:TemplateCategory},
    ]
  },

  { path: '**', redirectTo: '' }
];
