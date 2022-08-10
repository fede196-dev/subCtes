import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubClientesRoutingModule } from './sub-clientes-routing.module';
import { ListadoSubClientesComponent } from './pages/listado-sub-clientes/listado-sub-clientes.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { PerfilEmpleadoComponent } from './pages/perfil-empleado/perfil-empleado.component';

@NgModule({
  declarations: [
    ListadoSubClientesComponent,
    PerfilEmpleadoComponent,
  ],
  imports: [
    CommonModule,
    SubClientesRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class SubClientesModule { }
