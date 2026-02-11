import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentoringModalComponent } from './mentoring-modal.component';
import { Location } from '@angular/common';

describe('MentoringModal', () => {
  let component: MentoringModalComponent;
  let fixture: ComponentFixture<MentoringModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentoringModalComponent],
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

    fixture = TestBed.createComponent(MentoringModalComponent);
    component = fixture.componentInstance;
    component.product = {
      id: '1',
      active: true,
      name: 'Mentoria',
      resume: 'Mentoria',
      photos: ['photo1.webp', 'photo2.webp'],
      link: 'link',
      description: [''],
      timeline: [{
        icon: 'icon.webp',
        title: 'title',
      }],
      modules: [{
        title: 'title',
        topics: ['topic'],
      }],
      methodology: [{
        title: 'title',
        text: 'text',
      }],
      bonus: [{
        title: 'title',
        text: 'text',
      }],
      deliverables: [{
        text: 'text',
      }],
      headline: {
        title: 'title',
        text: 'text',
      },
      payment: {
        anchor_price: 'anchor_price',
        currency: 'BRL',
        value_through: '12',
        parcel_value: '12',
        cash_value: '12',
      },
      details: {
        duration: 'duration',
        format: 'format',
        encounters: 'encounters',
        guarantee: 'guarantee',
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});