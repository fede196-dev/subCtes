import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SubClientesService } from 'src/app/sub-clientes/services/sub-clientes.service';

@Component({
  selector: 'app-info-sub-cliente',
  templateUrl: './info-sub-cliente.component.html',
  styleUrls: ['./info-sub-cliente.component.scss']
})
export class InfoSubClienteComponent implements OnInit {

  formSubClientes: FormGroup
  @Input() view: string;
  @Input() codigoSubCliente: number;
  active: boolean;
  constructor(private subClienteService: SubClientesService) { }

  ngOnInit(): void {
    this.createFormGroup();
    if (this.codigoSubCliente) {
      this.setFormGroup();
    }
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
  setFormGroup() {
    this.subClienteService.getSubClientes().subscribe(subCliente => {
      const found = subCliente.find(subCli => subCli.SubClienteCodigo.toString() === this.codigoSubCliente.toString());
      this.formSubClientes.controls['CodigoSubCliente'].setValue(found?.SubClienteCodigo);
      this.formSubClientes.controls['NombreCompleto'].setValue(found?.SubClienteNombre);
      this.formSubClientes.controls['Status'].setValue(found?.SubClienteStatus === 1 ? 'Activo' : 'Inactivo');
      this.active = found?.SubClienteStatus === 1;
      this.formSubClientes.controls['NombreAbreviado'].setValue(found?.SubClienteNombreAbreviado);
      this.formSubClientes.controls['NroTelefono'].setValue(found?.SubClienteTelefono);
      this.formSubClientes.controls['Domicilio'].setValue(found?.SubClienteDomicilio);
      this.formSubClientes.controls['CarnetIdentidad'].setValue(found?.SubClienteCarnetIdentidad);
      this.formSubClientes.controls['TipoDocumentoCliente'].setValue(found?.SubClienteTipoDocumento);
      this.formSubClientes.controls['IdentificacionTributaria'].setValue(found?.SubClienteIdentificacionTributaria);
      this.formSubClientes.controls['Localidad'].setValue(found?.SubClienteLocalidad);
      this.formSubClientes.controls['DescripAbreviadaLocalidad'].setValue(found?.SubClienteLocalidad);
      this.formSubClientes.controls['Departamento'].setValue(found?.SubClienteDepartamento);
      this.formSubClientes.controls['Email'].setValue(found?.SubClienteEmail);

      if (this.view === 'profile')
        this.formSubClientes.disable();
    }
    )
  }

}
