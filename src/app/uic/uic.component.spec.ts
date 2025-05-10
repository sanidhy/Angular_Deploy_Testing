import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UICComponent } from './uic.component';

describe('UICComponent', () => {
  let component: UICComponent;
  let fixture: ComponentFixture<UICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UICComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
