import { Injectable } from '@angular/core';
import { Product } from '../data/models/product.model';
import { products } from '../data/constants/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getById(id: string | null): Product | undefined {
    return products.find(product => product.id === id)
  }
}