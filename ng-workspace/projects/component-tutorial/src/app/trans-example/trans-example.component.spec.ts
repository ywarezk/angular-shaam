import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransExampleComponent } from './trans-example.component';

describe('TransExampleComponent', () => {
  let component: TransExampleComponent;
  let fixture: ComponentFixture<TransExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
