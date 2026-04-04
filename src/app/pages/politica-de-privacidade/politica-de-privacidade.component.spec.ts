import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliticaPrivacidade } from './politica-de-privacidade.component';
import { ActivatedRoute } from '@angular/router';

describe('PoliticaPrivacidade', () => {
  let component: PoliticaPrivacidade;
  let fixture: ComponentFixture<PoliticaPrivacidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticaPrivacidade],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: { title: 'Política de Privacidade' },
            },
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticaPrivacidade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});