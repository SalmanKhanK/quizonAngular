import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTabComponent } from './submit-tab.component';

describe('SubmitTabComponent', () => {
  let component: SubmitTabComponent;
  let fixture: ComponentFixture<SubmitTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
