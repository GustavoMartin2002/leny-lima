import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-bonus',
  imports: [],
  templateUrl: './card-bonus.component.html',
  styleUrl: './card-bonus.component.scss'
})
export class CardBonusComponent {
  @Input() imgCard!: string;
  @Input() title!: string;
  @Input() text!: string;
}
