import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubClientesRoutingModule } from './sub-clientes-routing.module';
import { ListadoSubClientesComponent } from './pages/listado-sub-clientes/listado-sub-clientes.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { PerfilSubClienteComponent } from './pages/perfil-sub-cliente/perfil-sub-cliente.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HistorialCambiosComponent } from './components/perfil-sub-cliente/historial-cambios/historial-cambios.component';
import { RelacionesComponent } from './components/perfil-sub-cliente/relaciones/relaciones.component';
import { InfoSubClienteComponent } from './components/perfil-sub-cliente/info-sub-cliente/info-sub-cliente.component';
import { RelacionesSubClientesComponent } from './pages/relaciones-sub-clientes/relaciones-sub-clientes.component';

@NgModule({
  declarations: [
    ListadoSubClientesComponent,
    PerfilSubClienteComponent,
    HistorialCambiosComponent,
    RelacionesComponent,
    InfoSubClienteComponent,
    RelacionesSubClientesComponent,
  ],
  imports: [
    RouterModule,
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
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule

  ],

})
export class SubClientesModule { }
