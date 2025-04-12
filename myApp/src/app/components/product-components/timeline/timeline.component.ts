import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit{
  isLoading: boolean = true
  @Input() title1!: string
  @Input() title2!: string
  @Input() title3!: string

  @Input() text1!: string
  @Input() text2!: string
  @Input() text3!: string

  ngOnInit(): void {
    this.isLoading = false
  }
}
