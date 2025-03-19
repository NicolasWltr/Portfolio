import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollIndComponent } from './scroll-ind.component';

describe('ScrollIndComponent', () => {
  let component: ScrollIndComponent;
  let fixture: ComponentFixture<ScrollIndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollIndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
