import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateOnEnterComponent } from './animate-on-enter.component';

describe('AnimateOnEnterComponent', () => {
  let component: AnimateOnEnterComponent;
  let fixture: ComponentFixture<AnimateOnEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimateOnEnterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimateOnEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
