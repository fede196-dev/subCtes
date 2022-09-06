
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IClientesRelacionados } from '../models/response/perfil-sub-cliente/clientesRelacionados.model';
import { IHistorialCambios } from '../models/response/perfil-sub-cliente/historialCambios.model';
import { ISubclienteGrid } from '../models/response/listado-sub-clientes/subClientes-grid.model';
import { HttpClient } from '@angular/common/http';
import { ISubClientesParams } from '../models/request/subClienteParams.model';
import { Helpers } from '../components/shared/helpers/helper';

@Injectable({
  providedIn: 'root'
})
export class SubClientesService {
  url = 'api/';
  url2= `http://portalclientesvmas.dev.abinbev-las.com`

  constructor(private http: HttpClient) { }

  getSubClientes(): Observable<ISubclienteGrid[]> {
    return this.http.get<ISubclienteGrid[]>(this.url + 'subClientesGrid');
  }
/*   getSubClientes(params: ISubClientesParams): Observable<ISubclienteGrid[]> {
    return this.http.get<ISubclienteGrid[]>(`${this.url2}/quilmesportal_clientes_bo/Core/Params/APISubClientesConsultas/GetBandejaSubClientes`, {
      params: Helpers.toHttpParams(params)
    });
  } */
  getHistorial(): Observable<IHistorialCambios[]> {
    return this.http.get<IHistorialCambios[]>(this.url + 'historialCambios');
  }
  getClientes(): Observable<IClientesRelacionados[]> {
    return this.http.get<IClientesRelacionados[]>(this.url + 'clientesRelacionados');
  }

  editSubCliente(product: ISubclienteGrid): Observable<any> {
    return this.http.put<ISubclienteGrid>(this.url + product.SubClienteCodigo, product);
  }
}
