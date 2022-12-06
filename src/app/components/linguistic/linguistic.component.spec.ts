import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguisticComponent } from './linguistic.component';

describe('LinguisticComponent', () => {
  let component: LinguisticComponent;
  let fixture: ComponentFixture<LinguisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinguisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinguisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
