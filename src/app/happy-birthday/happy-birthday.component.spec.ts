import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyBirthdayComponent } from './happy-birthday.component';

describe('HappyBirthdayComponent', () => {
  let component: HappyBirthdayComponent;
  let fixture: ComponentFixture<HappyBirthdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappyBirthdayComponent]
    });
    fixture = TestBed.createComponent(HappyBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
