import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewRelacionComponent } from './dialog-new-relacion.component';

describe('DialogNewRelacionComponent', () => {
  let component: DialogNewRelacionComponent;
  let fixture: ComponentFixture<DialogNewRelacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewRelacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNewRelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
