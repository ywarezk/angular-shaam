import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrvComponent } from './trv.component';

describe('TrvComponent', () => {
  let component: TrvComponent;
  let fixture: ComponentFixture<TrvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
