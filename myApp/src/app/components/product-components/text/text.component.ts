import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent implements OnInit{
  isLoading: boolean = true
  @Input() text!: string
  @Input() classText!: string

  ngOnInit(): void {
    this.isLoading = false
  }
}
