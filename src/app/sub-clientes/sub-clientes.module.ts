import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubClientesRoutingModule } from './sub-clientes-routing.module';
import { ListadoSubClientesComponent } from './pages/listado-sub-clientes/listado-sub-clientes.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ListadoSubClientesComponent
  ],
  imports: [
    CommonModule,
    SubClientesRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SubClientesModule { }
