import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QTestComponent } from './q-test.component';

describe('QTestComponent', () => {
  let component: QTestComponent;
  let fixture: ComponentFixture<QTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
