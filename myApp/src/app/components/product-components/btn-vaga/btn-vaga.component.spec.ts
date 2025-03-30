import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnVagaComponent } from './btn-vaga.component';

describe('BtnVagaComponent', () => {
  let component: BtnVagaComponent;
  let fixture: ComponentFixture<BtnVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnVagaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
