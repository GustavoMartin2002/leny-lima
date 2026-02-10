import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})

export class AccordionComponent {
  @Input() title?: string;
  @Input() text?: string;

  protected readonly uniqueId = `accordion-${Math.random().toString(36).substring(2, 9)}`;
}