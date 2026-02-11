import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import ProductModel from '../../../data/models/product.model';
import { CommonModule, Location, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-mentoring-modal',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './mentoring-modal.component.html',
})
export class MentoringModalComponent implements AfterViewInit {
  @Input() product: ProductModel = {} as ProductModel;
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  constructor(private location: Location) {}

  ngAfterViewInit(): void {
    const path = this.location.path(true);

    if (path.includes(`#${this.product.id}`) && this.product.active === true) {
      this.dialog.nativeElement.showModal();
    }
  }

  showModal() {
    this.dialog.nativeElement.showModal();
    this.location.go(`#${this.product.id}`);
  }
}