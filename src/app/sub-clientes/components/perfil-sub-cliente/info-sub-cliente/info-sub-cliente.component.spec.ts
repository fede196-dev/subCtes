import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSubClienteComponent } from './info-sub-cliente.component';

describe('InfoSubClienteComponent', () => {
  let component: InfoSubClienteComponent;
  let fixture: ComponentFixture<InfoSubClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSubClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSubClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
