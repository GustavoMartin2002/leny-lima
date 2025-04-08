import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  isLoading: boolean = true
  @Input() imageSrc: string = '';
  @Input() rout!: any;
  
  ngOnInit(): void {
    this.isLoading = false
  }
}