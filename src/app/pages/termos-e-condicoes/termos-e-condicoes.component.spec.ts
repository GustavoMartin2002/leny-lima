import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermosCondicoes } from './termos-e-condicoes.component';
import { ActivatedRoute } from '@angular/router';

describe('TermosCondicoes', () => {
  let component: TermosCondicoes;
  let fixture: ComponentFixture<TermosCondicoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermosCondicoes],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: { title: 'Termos e Condições' },
            },
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermosCondicoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});