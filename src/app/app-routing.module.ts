import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/portalSubClientes',
    pathMatch: 'full'
  },
  {
    path: 'portalSubClientes',
    loadChildren: () => import('./sub-clientes/sub-clientes.module').then(m => m.SubClientesModule),
    data: {breadcrumb: { skip: true }},
  },
  {
    path: '**',
    redirectTo: 'portalSubClientes',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
