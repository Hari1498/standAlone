import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingComponent } from './floating.component';

describe('FloatingLabelsComponent', () => {
  let component: FloatingComponent;
  let fixture: ComponentFixture<FloatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
