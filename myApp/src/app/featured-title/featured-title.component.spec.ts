import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTitleComponent } from './featured-title.component';

describe('FeaturedTitleComponent', () => {
  let component: FeaturedTitleComponent;
  let fixture: ComponentFixture<FeaturedTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
