import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor',
  imports: [CommonModule],
  templateUrl: './mentor.component.html',
  styleUrl: './mentor.component.scss'
})
export class MentorComponent implements OnInit{
  isLoading: boolean = true
  ngOnInit(): void {
    this.isLoading = false
  }
}
