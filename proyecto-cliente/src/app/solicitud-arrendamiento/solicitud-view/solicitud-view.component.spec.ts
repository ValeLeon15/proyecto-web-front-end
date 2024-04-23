import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudViewComponent } from './solicitud-view.component';

describe('SolicitudViewComponent', () => {
  let component: SolicitudViewComponent;
  let fixture: ComponentFixture<SolicitudViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitudViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
