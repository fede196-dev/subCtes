import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSubClientesComponent } from './listado-sub-clientes.component';

describe('ListadoSubClientesComponent', () => {
  let component: ListadoSubClientesComponent;
  let fixture: ComponentFixture<ListadoSubClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoSubClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSubClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
