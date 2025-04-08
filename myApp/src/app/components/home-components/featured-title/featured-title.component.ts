import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-title',
  imports: [CommonModule],
  templateUrl: './featured-title.component.html',
  styleUrl: './featured-title.component.scss'
})
export class FeaturedTitleComponent implements OnInit{
  isLoading: boolean = true
  
  ngOnInit(): void {
    this.isLoading = false
  }
}
