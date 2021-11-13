import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LooperCompComponent } from './looper-comp.component';

describe('LooperCompComponent', () => {
  let component: LooperCompComponent;
  let fixture: ComponentFixture<LooperCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LooperCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LooperCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
