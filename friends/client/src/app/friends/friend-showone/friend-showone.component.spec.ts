import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendShowoneComponent } from './friend-showone.component';

describe('FriendShowoneComponent', () => {
  let component: FriendShowoneComponent;
  let fixture: ComponentFixture<FriendShowoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendShowoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendShowoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
