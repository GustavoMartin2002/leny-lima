import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-vaga',
  imports: [],
  templateUrl: './btn-vaga.component.html',
  styleUrl: './btn-vaga.component.scss'
})
export class BtnVagaComponent {
  @Input() link!: string
}
