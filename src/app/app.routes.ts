import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { AuthGuard } from './guards/auth-guard';
import { ForgotPassword } from './pages/auth/forgot-password/forgot-password';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { EmailGenerator } from './pages/email-generator/email-generator';
import { EmailOutput } from './pages/email-output/email-output';
import { Home } from './pages/home/home';
import { Settings } from './pages/settings/settings';
import { Templates } from './pages/templates/templates';

export const routes: Routes = [


  // Public Route
  { path: '', component: Home },

  // Auth
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },

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
    ]
  },

  { path: '**', redirectTo: '' }
];
