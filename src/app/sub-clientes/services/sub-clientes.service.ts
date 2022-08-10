import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISubclienteGrid } from '../models/listado-sub-clientes/subClientes-grid.model';

@Injectable({
  providedIn: 'root'
})
export class SubClientesService {
  url = 'api/subClientesGrid';

  constructor(private http: HttpClient) { }

  getSubClientes():Observable<ISubclienteGrid[]>{
    return this.http.get<ISubclienteGrid[]>(this.url);
  }

}
