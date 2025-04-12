import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccordionComponent } from "../accordion/accordion.component";

@Component({
  selector: 'app-hero',
  imports: [CommonModule, AccordionComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit{
  isLoading:boolean = true

  ngOnInit(): void {
    this.isLoading = false
  }
}
