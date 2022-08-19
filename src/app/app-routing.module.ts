import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
/*   {
    path: '**',
    loadChildren: () => import('./sub-clientes/sub-clientes.module').then(m => m.SubClientesModule)
  }, */
  {
    path: '',
    loadChildren: () => import('./sub-clientes/sub-clientes.module').then(m => m.SubClientesModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./sub-clientes/sub-clientes.module').then(m => m.SubClientesModule),
    data: {breadcrumb: { skip: true }},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
