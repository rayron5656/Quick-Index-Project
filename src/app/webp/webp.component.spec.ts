import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpComponent } from './webp.component';

describe('WebpComponent', () => {
  let component: WebpComponent;
  let fixture: ComponentFixture<WebpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
