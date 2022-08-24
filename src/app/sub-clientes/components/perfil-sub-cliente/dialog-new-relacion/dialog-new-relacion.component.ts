import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IClientesRelacionados } from 'src/app/sub-clientes/models/perfil-sub-cliente/ClientesRelacionados.model';
import { IHistorialCambios } from 'src/app/sub-clientes/models/perfil-sub-cliente/historialCambios';
import { SubClientesService } from 'src/app/sub-clientes/services/sub-clientes.service';

@Component({
  selector: 'app-dialog-new-relacion',
  templateUrl: './dialog-new-relacion.component.html',
  styleUrls: ['./dialog-new-relacion.component.scss']
})

export class DialogNewRelacionComponent implements OnInit {

  clientesRelacionados: IClientesRelacionados[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<IClientesRelacionados>;
  selectedCliente: IClientesRelacionados;
  oldSelect: number = -1;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialogRef: MatDialogRef<DialogNewRelacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IHistorialCambios,
    private subClienteService: SubClientesService) { }

  ngOnInit(): void {
    this.setGridClientes();
  }

  done() {
    this.data.ClienteID = this.selectedCliente.ClienteID;
    this.data.DescripCliente = this.selectedCliente.DescripCliente;
    this.data.Status = this.selectedCliente.Status;
    this.dialogRef.close(this.data);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  setGridClientes() {
    this.subClienteService.getClientes().subscribe(clientes=>{
      this.clientesRelacionados = clientes
      this.dataSource = new MatTableDataSource(this.clientesRelacionados);
      this.dataSource.paginator = this.paginator;

    })
  }

  changeState(row: IClientesRelacionados, i: number){

    if (this.oldSelect !== -1)
    {
      this.dataSource.data[this.oldSelect].selected = false;
    }
      row.selected = !row.selected;
      this.selectedCliente = row;
      this.oldSelect = i;
    }

}
