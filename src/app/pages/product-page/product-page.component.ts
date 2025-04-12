import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../data/models/product.model';
import { ProductService } from '../../services/product.service';
import { VideoComponent } from "../../components/product-components/video/video.component";
import { BtnVagaComponent } from "../../components/product-components/btn-vaga/btn-vaga.component";
import { TitleComponent } from "../../components/product-components/title/title.component";
import { TextComponent } from "../../components/product-components/text/text.component";
import { ModuleComponent } from "../../components/product-components/module/module.component";
import { CardBonusComponent } from "../../components/product-components/card-bonus/card-bonus.component";
import { PaymentCardComponent } from "../../components/product-components/payment-card/payment-card.component";
import { MentorComponent } from "../../components/product-components/mentor/mentor.component";
import { CardPodcastComponent } from "../../components/product-components/card-podcast/card-podcast.component";
import { TimelineComponent } from "../../components/product-components/timeline/timeline.component";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, VideoComponent, BtnVagaComponent, TitleComponent, TextComponent, ModuleComponent, CardBonusComponent, PaymentCardComponent, MentorComponent, CardPodcastComponent, TimelineComponent, RouterModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent implements OnInit{
  isLoading: boolean = true
  product: Product | undefined
  private productService = inject(ProductService)
  private router = inject(ActivatedRoute)

  ngOnInit(): void {
    this.isLoading = false

    const id = this.router.snapshot.paramMap.get('id')
    this.product = this.productService.getById(id)
  }
}