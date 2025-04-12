import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPodcastComponent } from './card-podcast.component';

describe('CardPodcastComponent', () => {
  let component: CardPodcastComponent;
  let fixture: ComponentFixture<CardPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPodcastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
