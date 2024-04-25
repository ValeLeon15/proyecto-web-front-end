import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrendatarioComponent } from './form-arrendatario.component';

describe('FormArrendatarioComponent', () => {
  let component: FormArrendatarioComponent;
  let fixture: ComponentFixture<FormArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
