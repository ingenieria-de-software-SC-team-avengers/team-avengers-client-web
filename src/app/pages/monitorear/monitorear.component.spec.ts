import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorearComponent } from './monitorear.component';

describe('MonitorearComponent', () => {
  let component: MonitorearComponent;
  let fixture: ComponentFixture<MonitorearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
