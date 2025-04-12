import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent implements OnInit{
  isLoading: boolean = true
  @Input() videoSrc!: string

  ngOnInit(): void {
    this.isLoading = false
  }
}
