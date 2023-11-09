import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./components/usage-page/usage-page-routes').then((m) => m.usagePageRoutes),
  },
  {
    path: 'test',
    loadChildren: () => import('./components/test-page/test-page-routes').then((m) => m.testPageRoutes),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
