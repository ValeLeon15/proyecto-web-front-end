import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPropiedadComponent } from './form-propiedad.component';

describe('FormPropiedadComponent', () => {
  let component: FormPropiedadComponent;
  let fixture: ComponentFixture<FormPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormPropiedadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
