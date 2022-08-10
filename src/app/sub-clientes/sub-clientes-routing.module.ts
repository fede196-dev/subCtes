import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoSubClientesComponent } from './pages/listado-sub-clientes/listado-sub-clientes.component';

const routes: Routes = [
  {
    path: '',
      component: ListadoSubClientesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubClientesRoutingModule { }
