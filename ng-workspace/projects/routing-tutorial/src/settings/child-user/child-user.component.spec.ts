import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildUserComponent } from './child-user.component';

describe('ChildUserComponent', () => {
  let component: ChildUserComponent;
  let fixture: ComponentFixture<ChildUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
