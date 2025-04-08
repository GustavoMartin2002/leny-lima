import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module',
  imports: [CommonModule],
  templateUrl: './module.component.html',
  styleUrl: './module.component.scss'
})
export class ModuleComponent implements OnInit{
  isLoading: boolean = true
  @Input() imgModule!: string
  @Input() textList!: string[]

  ngOnInit(): void {
    this.isLoading = false
  }
}
