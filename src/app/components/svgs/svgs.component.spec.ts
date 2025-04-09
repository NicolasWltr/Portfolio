import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgsComponent } from './svgs.component';

describe('SvgsComponent', () => {
  let component: SvgsComponent;
  let fixture: ComponentFixture<SvgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
