import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IClientesRelacionados } from '../models/perfil-sub-cliente/clientesRelacionados.model';
import { IHistorialCambios } from '../models/perfil-sub-cliente/historialCambios';
import { ISubclienteGrid } from '../models/perfil-sub-cliente/subClientes-grid.model';

@Injectable({
  providedIn: 'root'
})
export class SubClientesService {
  url = 'api/';

  constructor(private http: HttpClient) { }

  getSubClientes():Observable<ISubclienteGrid[]>{
    return this.http.get<ISubclienteGrid[]>(this.url + 'subClientesGrid');
  }
  getHistorial():Observable<IHistorialCambios[]>{
    return this.http.get<IHistorialCambios[]>(this.url + 'historialCambios');
  }
  getClientes():Observable<IClientesRelacionados[]>{
    return this.http.get<IClientesRelacionados[]>(this.url + 'clientesRelacionados');
  }





  editSubCliente(product: ISubclienteGrid): Observable<any> {
    return this.http.put<ISubclienteGrid>(this.url + product.Codigo, product);
  }
}
