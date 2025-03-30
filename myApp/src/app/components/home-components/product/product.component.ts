import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  @Input() imageSrc: string = '';
  @Input() rout!: any;
  skeleton: string = 'skeleton rounded-xl';
  
  ngOnInit(): void {
    this.skeleton = '';
  }
}