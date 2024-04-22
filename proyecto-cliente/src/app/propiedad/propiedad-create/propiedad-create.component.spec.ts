import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadCreateComponent } from './propiedad-create.component';

describe('PropiedadCreateComponent', () => {
  let component: PropiedadCreateComponent;
  let fixture: ComponentFixture<PropiedadCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropiedadCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropiedadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
