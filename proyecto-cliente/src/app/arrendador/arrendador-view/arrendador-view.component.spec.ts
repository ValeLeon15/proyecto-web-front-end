import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorViewComponent } from './arrendador-view.component';

describe('ArrendadorViewComponent', () => {
  let component: ArrendadorViewComponent;
  let fixture: ComponentFixture<ArrendadorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrendadorViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrendadorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
