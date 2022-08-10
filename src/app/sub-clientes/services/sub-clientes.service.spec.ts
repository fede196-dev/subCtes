import { TestBed } from '@angular/core/testing';

import { SubClientesService } from './sub-clientes.service';

describe('SubClientesService', () => {
  let service: SubClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
