import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IHistorialCambios } from 'src/app/sub-clientes/models/response/perfil-sub-cliente/historialCambios.model';
import { SubClientesService } from 'src/app/sub-clientes/services/sub-clientes.service';
import Swal from 'sweetalert2';
import { DialogNewRelacionComponent } from '../dialog-new-relacion/dialog-new-relacion.component';

@Component({
  selector: 'app-relaciones',
  templateUrl: './relaciones.component.html',
  styleUrls: ['./relaciones.component.scss']
})
export class RelacionesComponent implements OnInit {
  historialCambios: IHistorialCambios[] = [];
  dataSource: MatTableDataSource<IHistorialCambios>;
  @Input() options: boolean;
  displayedColumns: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  subcliente: IHistorialCambios;
  constructor(private subClienteService: SubClientesService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getHistorialCambios();
    this.displayedColumns = this.options === true ? ['Opciones', 'Cliente', 'DescripCliente', 'Status'] : ['Cliente', 'DescripCliente', 'Status']
  }

  getHistorialCambios() {
    this.subClienteService.getHistorial().subscribe(historial => {
      this.dataSource = new MatTableDataSource(historial);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.historialCambios = historial;

    })
  }
  changeStatusRelacion(cliente: IHistorialCambios, estado: number) {
    let texto = estado === 1 ? 'reactivará' : 'dará de baja';
    Swal.fire({
      title: '¿Desea Realizar esta acción?',
      text: 'Se ' + texto + ' la relación con ' + cliente.DescripCliente,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(27 167 22)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        texto = estado === 1 ? 'reactivación' : 'baja';
        cliente.Status = estado;
        Swal.fire(
          'Éxito!',
          'Se efectuó la ' + texto,
          'success'
        )
      }
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNewRelacionComponent, {
      width: '70%',
      data: {},
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.subcliente = result;
        this.historialCambios.push(this.subcliente);
        this.dataSource.data = this.historialCambios;
      }
    });
  }
}
