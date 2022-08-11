import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSubClienteComponent } from './perfil-sub-cliente.component';

describe('PerfilSubClienteComponent', () => {
  let component: PerfilSubClienteComponent;
  let fixture: ComponentFixture<PerfilSubClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilSubClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilSubClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
