import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentoringComponent } from './mentoring.component';

describe('Mentoring', () => {
  let component: MentoringComponent;
  let fixture: ComponentFixture<MentoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});