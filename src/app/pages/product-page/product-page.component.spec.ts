import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPageComponent } from './product-page.component';
import { provideRouter } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { products } from '../../data/constants/products';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let productService: ProductService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPageComponent],
      //  enter the route for the test to run correctly
      providers: [provideRouter([]), ProductService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('getById: return product by ID (string)', () => {
    const mockId = products[0].id
    const result = productService.getById(mockId)
    expect(result).toEqual(jasmine.objectContaining({id: 'amanhecer'}))
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
