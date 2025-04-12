import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-vaga',
  imports: [CommonModule],
  templateUrl: './btn-vaga.component.html',
  styleUrl: './btn-vaga.component.scss'
})
export class BtnVagaComponent implements OnInit{
  isLoading: boolean = true
  @Input() link!: string

  ngOnInit(): void {
    this.isLoading = false
  }
}
