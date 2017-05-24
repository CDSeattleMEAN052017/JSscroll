import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendNewComponent } from './friend-new.component';

describe('FriendNewComponent', () => {
  let component: FriendNewComponent;
  let fixture: ComponentFixture<FriendNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
