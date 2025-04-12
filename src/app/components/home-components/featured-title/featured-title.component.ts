import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-title',
  imports: [CommonModule],
  templateUrl: './featured-title.component.html',
  styleUrl: './featured-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedTitleComponent implements OnInit{
  isLoading: boolean = true
  
  ngOnInit(): void {
    this.isLoading = false
  }
}
