import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstackCardsComponent } from './techstack-cards.component';

describe('TechstackCardsComponent', () => {
  let component: TechstackCardsComponent;
  let fixture: ComponentFixture<TechstackCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechstackCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechstackCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
