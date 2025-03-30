import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

}