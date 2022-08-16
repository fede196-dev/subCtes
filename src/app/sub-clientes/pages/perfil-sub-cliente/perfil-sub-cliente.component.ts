import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { ActivatedRoute, Params } from '@angular/router';
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
  appearance: MatFormFieldAppearance;
  constructor(private subClienteService: SubClientesService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => {
      this.codigoSubCliente = params['id'];
      this.view = params['view']
    });

   }

  ngOnInit(): void {
    this.createFormGroup();
    if(this.codigoSubCliente){
      this.setFormGroup();
    }
  }

  setFormGroup(){
      this.subClienteService.getSubClientes().subscribe(subCliente =>{
      const found=subCliente.find(subCli => subCli.Codigo.toString() === this.codigoSubCliente.toString());
      this.formSubClientes.controls['CodigoSubCliente'].setValue(found?.Codigo);
      this.formSubClientes.controls['NombreCompleto'].setValue(found?.RazonSocial);
      this.formSubClientes.controls['Status'].setValue(found?.Status);
      this.formSubClientes.controls['NombreAbreviado'].setValue(found?.RazonSocial);
      this.appearance='outline'
    if(this.view === 'profile')
    this.formSubClientes.disable();
    }

    )

  }

  createFormGroup(){
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
      FechaBaja:new FormControl(''),
      FechaActualizacion: new FormControl(''),
      Localidad: new FormControl(''),
      DescripAbreviadaLocalidad: new FormControl(''),
      Departamento: new FormControl(''),
      DescripAbreviadaDto: new FormControl(''),
      Email: new FormControl(''),
    })

  }



}
