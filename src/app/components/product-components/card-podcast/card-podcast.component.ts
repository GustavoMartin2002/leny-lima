import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-podcast',
  imports: [CommonModule],
  templateUrl: './card-podcast.component.html',
  styleUrl: './card-podcast.component.scss'
})
export class CardPodcastComponent {
  isLoading: boolean = true
  @Input() img!: string
  @Input() text1!: string
  @Input() text2!: string

  ngOnInit(): void {
    this.isLoading = false
  }
}
