import { Injectable } from '@angular/core';
import { Product } from '../components/home-components/product/product.model';
import { products } from '../components/home-components/product-list/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}

  getById(id: any): Product | undefined {
    return products.find(product => product.id === id)
  }
}
