import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-bonus',
  imports: [CommonModule],
  templateUrl: './card-bonus.component.html',
  styleUrl: './card-bonus.component.scss'
})
export class CardBonusComponent implements OnInit{
  isLoading: boolean = true
  @Input() imgCard!: string;
  @Input() title!: string;
  @Input() text!: string;

  ngOnInit(): void {
    this.isLoading = false
  }
}