import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionViewComponent } from './calificacion-view.component';

describe('CalificacionViewComponent', () => {
  let component: CalificacionViewComponent;
  let fixture: ComponentFixture<CalificacionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalificacionViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalificacionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
