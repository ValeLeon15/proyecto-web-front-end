import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatarioViewComponent } from './arrendatario-view.component';

describe('ArrendatarioVerComponent', () => {
  let component: ArrendatarioViewComponent;
  let fixture: ComponentFixture<ArrendatarioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrendatarioViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrendatarioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
