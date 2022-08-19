import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { IHistorialCambios } from '../../models/listado-sub-clientes/historialCambios';
import { SubClientesService } from '../../services/sub-clientes.service';

@Component({
  selector: 'app-perfil-sub-cliente',
  templateUrl: './perfil-sub-cliente.component.html',
  styleUrls: ['./perfil-sub-cliente.component.scss']
})
export class PerfilSubClienteComponent implements OnInit {

  formSubClientes: FormGroup
  view: string;
  codigoSubCliente: number;
  active: boolean;
  historialCambios: IHistorialCambios [] = [];
  dataSource: MatTableDataSource<IHistorialCambios>;
  displayedColumns: string[] = ['Cliente','FechaMod', 'DescripCliente', 'DescripCambio'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private subClienteService: SubClientesService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => {
      this.codigoSubCliente = params['id'];
      this.view = params['view']
    });

  }

  ngOnInit(): void {
    this.createFormGroup();
    if (this.codigoSubCliente) {
      this.setFormGroup();
    }
    this.getHistorialCambios();
  }

  setFormGroup() {
    this.subClienteService.getSubClientes().subscribe(subCliente => {
      const found = subCliente.find(subCli => subCli.Codigo.toString() === this.codigoSubCliente.toString());
      this.formSubClientes.controls['CodigoSubCliente'].setValue(found?.Codigo);
      this.formSubClientes.controls['NombreCompleto'].setValue(found?.RazonSocial);
      this.formSubClientes.controls['Status'].setValue(found?.Status === 1 ? 'Activo' : 'Inactivo');
      this.active = found?.Status === 1;
      console.log(this.active);

      this.formSubClientes.controls['NombreAbreviado'].setValue(found?.RazonSocial);

      if (this.view === 'profile')
        this.formSubClientes.disable();
    }

    )

  }

  getHistorialCambios(){
    this.subClienteService.getHistorial().subscribe(historial => {
      console.log(historial);
      this.dataSource = new MatTableDataSource(historial);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.historialCambios = historial;

    })
  }
  createFormGroup() {
    this.formSubClientes = new FormGroup({
      CodigoSubCliente: new FormControl(null),
      NombreCompleto: new FormControl(''),
      Domicilio: new FormControl(''),
      Status: new FormControl(''),
      NombreAbreviado: new FormControl(''),
      NroTelefono: new FormControl(''),
      CarnetIdentidad: new FormControl(''),
      TipoDocumentoCliente: new FormControl(''),
      IdentificacionTributaria: new FormControl(''),
      FechaAlta: new FormControl(''),
      FechaBaja: new FormControl(''),
      FechaActualizacion: new FormControl(''),
      Localidad: new FormControl(''),
      DescripAbreviadaLocalidad: new FormControl(''),
      Departamento: new FormControl(''),
      DescripAbreviadaDto: new FormControl(''),
      Email: new FormControl(''),
    })

  }



}
