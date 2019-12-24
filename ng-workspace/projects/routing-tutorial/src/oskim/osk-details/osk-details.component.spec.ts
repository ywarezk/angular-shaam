import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OskDetailsComponent } from './osk-details.component';

describe('OskDetailsComponent', () => {
  let component: OskDetailsComponent;
  let fixture: ComponentFixture<OskDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OskDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
