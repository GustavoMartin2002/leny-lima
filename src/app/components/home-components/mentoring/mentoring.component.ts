import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MentoringCardComponent } from '../mentoring-card/mentoring-card.component';
import { products } from '../../../data/constants/products';
import ProductModel from '../../../data/models/product.model';

@Component({
  selector: 'app-mentoring',
  standalone: true,
  imports: [CommonModule, MentoringCardComponent],
  templateUrl: './mentoring.component.html',
})
export class MentoringComponent {
  products: ProductModel[] = products;
}