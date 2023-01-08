import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarTestingComponent } from './avatar-testing.component';

describe('AvatarTestingComponent', () => {
  let component: AvatarTestingComponent;
  let fixture: ComponentFixture<AvatarTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
