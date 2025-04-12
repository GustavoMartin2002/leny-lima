import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBonusComponent } from './card-bonus.component';

describe('CardBonusComponent', () => {
  let component: CardBonusComponent;
  let fixture: ComponentFixture<CardBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBonusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
