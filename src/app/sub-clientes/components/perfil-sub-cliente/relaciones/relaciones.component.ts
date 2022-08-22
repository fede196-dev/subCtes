import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IHistorialCambios } from 'src/app/sub-clientes/models/perfil-sub-cliente/historialCambios';
import { SubClientesService } from 'src/app/sub-clientes/services/sub-clientes.service';

@Component({
  selector: 'app-relaciones',
  templateUrl: './relaciones.component.html',
  styleUrls: ['./relaciones.component.scss']
})
export class RelacionesComponent implements OnInit {
  historialCambios: IHistorialCambios[] = [];
  dataSource: MatTableDataSource<IHistorialCambios>;
  @Input() options:boolean;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private subClienteService: SubClientesService) {
   }

  ngOnInit(): void {
    this.getHistorialCambios();
    this.displayedColumns = this.options === true ?  ['Opciones','Cliente', 'DescripCliente', 'Status'] : ['Cliente', 'DescripCliente', 'Status']

  }

  getHistorialCambios() {
    this.subClienteService.getHistorial().subscribe(historial => {
      console.log(historial);
      this.dataSource = new MatTableDataSource(historial);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.historialCambios = historial;

    })
  }
}
