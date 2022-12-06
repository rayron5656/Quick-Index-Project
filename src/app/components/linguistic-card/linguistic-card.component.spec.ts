import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguisticCardComponent } from './linguistic-card.component';

describe('LinguisticCardComponent', () => {
  let component: LinguisticCardComponent;
  let fixture: ComponentFixture<LinguisticCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinguisticCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinguisticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
