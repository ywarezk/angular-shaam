import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OskimListComponent } from './oskim-list.component';

describe('OskimListComponent', () => {
  let component: OskimListComponent;
  let fixture: ComponentFixture<OskimListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OskimListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OskimListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
