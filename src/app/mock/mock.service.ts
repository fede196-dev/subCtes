import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
 import subClientesGrid from './data/subClientes.mock';


@Injectable({
  providedIn: 'root',
})
export class MockService implements InMemoryDbService {
  createDb(): any {
    return {
      subClientesGrid
    };
  }
}
