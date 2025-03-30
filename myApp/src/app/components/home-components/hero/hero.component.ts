import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit{
  skeleton: string = 'skeleton rounded-xl';

  ngOnInit(): void {
    this.skeleton = ''
  }
}
