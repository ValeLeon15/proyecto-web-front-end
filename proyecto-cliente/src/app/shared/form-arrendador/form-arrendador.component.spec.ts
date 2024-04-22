import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrendadorComponent } from './form-arrendador.component';

describe('FormArrendadorComponent', () => {
  let component: FormArrendadorComponent;
  let fixture: ComponentFixture<FormArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
