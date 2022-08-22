import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => {
      this.codigoSubCliente = params['id'];
      this.view = params['view']
    });

  }

  ngOnInit(): void {

  }

}
