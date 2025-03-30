import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module',
  imports: [CommonModule],
  templateUrl: './module.component.html',
  styleUrl: './module.component.scss'
})
export class ModuleComponent {
  @Input() imgModule!: string
  @Input() textList!: string[]
}
