import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../components/home-components/product/product.model';
import { ProductService } from '../../services/product.service';
import { VideoComponent } from "../../components/product-components/video/video.component";
import { BtnVagaComponent } from "../../components/product-components/btn-vaga/btn-vaga.component";
import { TitleComponent } from "../../components/product-components/title/title.component";
import { TextComponent } from "../../components/product-components/text/text.component";
import { ModuleComponent } from "../../components/product-components/module/module.component";
import { MiniCardComponent } from "../../components/product-components/mini-card/mini-card.component";
import { CardBonusComponent } from "../../components/product-components/card-bonus/card-bonus.component";
import { PaymentCardComponent } from "../../components/product-components/payment-card/payment-card.component";
import { MentorComponent } from "../../components/product-components/mentor/mentor.component";

@Component({
  selector: 'app-product-page',
  imports: [CommonModule, VideoComponent, BtnVagaComponent, TitleComponent, TextComponent, ModuleComponent, CardBonusComponent, MiniCardComponent, PaymentCardComponent, MentorComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{
  product: Product | undefined
  productService = inject(ProductService)

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id')
    this.product = this.productService.getById(id)
  }
}