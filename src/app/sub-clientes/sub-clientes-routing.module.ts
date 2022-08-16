import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoSubClientesComponent } from './pages/listado-sub-clientes/listado-sub-clientes.component';
import { PerfilSubClienteComponent } from './pages/perfil-sub-cliente/perfil-sub-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoSubClientesComponent
  },
  {
    path:'perfilSubCliente/:id/:view',
    component: PerfilSubClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubClientesRoutingModule { }
