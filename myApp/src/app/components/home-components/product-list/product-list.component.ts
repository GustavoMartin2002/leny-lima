import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {

}