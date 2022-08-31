import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IHistorialCambios } from 'src/app/sub-clientes/models/response/perfil-sub-cliente/historialCambios.model';
import { SubClientesService } from 'src/app/sub-clientes/services/sub-clientes.service';

@Component({
  selector: 'app-historial-cambios',
  templateUrl: './historial-cambios.component.html',
  styleUrls: ['./historial-cambios.component.scss']
})
export class HistorialCambiosComponent implements OnInit {
  historialCambios: IHistorialCambios[] = [];
  dataSource: MatTableDataSource<IHistorialCambios>;
  displayedColumns: string[] = ['Cliente', 'FechaMod', 'DescripCliente', 'DescripCambio'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private subClienteService: SubClientesService) { }

  ngOnInit(): void {
    this.getHistorialCambios();
  }

  getHistorialCambios() {
    this.subClienteService.getHistorial().subscribe(historial => {
      this.dataSource = new MatTableDataSource(historial);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.historialCambios = historial;

    })
  }
}
