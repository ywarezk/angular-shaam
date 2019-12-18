import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleExampleComponent } from './lifecycle-example.component';

describe('LifecycleExampleComponent', () => {
  let component: LifecycleExampleComponent;
  let fixture: ComponentFixture<LifecycleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
