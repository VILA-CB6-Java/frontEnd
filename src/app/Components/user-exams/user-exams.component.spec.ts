import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExamsComponent } from './user-exams.component';

describe('UserExamsComponent', () => {
  let component: UserExamsComponent;
  let fixture: ComponentFixture<UserExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
