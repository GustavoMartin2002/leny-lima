import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  imports: [CommonModule],
  templateUrl: './mini-card.component.html',
  styleUrl: './mini-card.component.scss'
})
export class MiniCardComponent implements OnInit{
  isLoading: boolean = true
  @Input() text!: string

  ngOnInit(): void {
    this.isLoading = false
  }
}
