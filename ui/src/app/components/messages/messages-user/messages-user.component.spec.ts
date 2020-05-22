import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesUserComponent } from './messages-user.component';

describe('MessagesUserComponent', () => {
  let component: MessagesUserComponent;
  let fixture: ComponentFixture<MessagesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
