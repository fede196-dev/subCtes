import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoSubClientesComponent } from './pages/listado-sub-clientes/listado-sub-clientes.component';
import { PerfilSubClienteComponent } from './pages/perfil-sub-cliente/perfil-sub-cliente.component';
import { RelacionesSubClientesComponent } from './pages/relaciones-sub-clientes/relaciones-sub-clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoSubClientesComponent,

  },
  {
    path: 'perfilSubCliente/:id/:view',
    component: PerfilSubClienteComponent,
    data: { title: 'Perfil' }

  },
  {
    path: 'perfilSubCliente/:view',
    component: PerfilSubClienteComponent,
    data: { title: 'Nuevo' }
  },
  {
    path: 'relaciones/:id',
    component: RelacionesSubClientesComponent,
    data: { title: 'Relaciones' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubClientesRoutingModule { }
