import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageReactiveComponent } from './message-reactive.component';

describe('MessageReactiveComponent', () => {
  let component: MessageReactiveComponent;
  let fixture: ComponentFixture<MessageReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
