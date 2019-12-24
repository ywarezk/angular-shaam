import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTabComponent } from './parent-tab.component';

describe('ParentTabComponent', () => {
  let component: ParentTabComponent;
  let fixture: ComponentFixture<ParentTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
