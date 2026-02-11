import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentoringCardComponent } from './mentoring-card.component';
import { Location } from '@angular/common';
import { products } from '../../../data/constants/products';

describe('MentoringCardComponent', () => {
  let component: MentoringCardComponent;
  let fixture: ComponentFixture<MentoringCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentoringCardComponent],
      providers: [
        {
          provide: Location,
          useValue: {
            path: () => '',
            go: () => { }
          }
        },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MentoringCardComponent);
    component = fixture.componentInstance;
    component.product = products[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
