import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannedComponent } from './scanned.component';

describe('ScannedComponent', () => {
  let component: ScannedComponent;
  let fixture: ComponentFixture<ScannedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
