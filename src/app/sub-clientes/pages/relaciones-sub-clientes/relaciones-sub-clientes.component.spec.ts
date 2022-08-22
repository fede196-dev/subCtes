import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionesSubClientesComponent } from './relaciones-sub-clientes.component';

describe('RelacionesSubClientesComponent', () => {
  let component: RelacionesSubClientesComponent;
  let fixture: ComponentFixture<RelacionesSubClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionesSubClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionesSubClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
