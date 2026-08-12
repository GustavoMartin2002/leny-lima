import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MentoringModalComponent } from '../mentoring-modal/mentoring-modal.component';
import ProductModel from '../../../data/models/product.model';

@Component({
  selector: 'app-mentoring-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MentoringModalComponent, RouterLink],
  templateUrl: './mentoring-card.component.html',
})
export class MentoringCardComponent {
  @Input() product: ProductModel = {} as ProductModel;
}