import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit{
  isLoading: boolean = true
  @Input() title?: string
  @Input() text?: string
  
  ngOnInit(): void {
    this.isLoading = false
  }
}
