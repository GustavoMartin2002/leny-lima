import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  imports: [],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.scss'
})
export class MiniCardComponent {
  @Input() text!: string
}
