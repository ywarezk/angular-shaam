import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHelloComponent } from './dashboard-hello.component';

describe('DashboardHelloComponent', () => {
  let component: DashboardHelloComponent;
  let fixture: ComponentFixture<DashboardHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
