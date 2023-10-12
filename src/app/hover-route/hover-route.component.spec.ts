import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverRouteComponent } from './hover-route.component';

describe('HoverRouteComponent', () => {
  let component: HoverRouteComponent;
  let fixture: ComponentFixture<HoverRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoverRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
