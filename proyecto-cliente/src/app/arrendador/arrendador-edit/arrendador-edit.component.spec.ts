import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorEditComponent } from './arrendador-edit.component';

describe('ArrendadorEditComponent', () => {
  let component: ArrendadorEditComponent;
  let fixture: ComponentFixture<ArrendadorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrendadorEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrendadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
