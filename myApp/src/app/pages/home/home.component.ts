import { Component } from "@angular/core";
import { FeaturedTitleComponent } from "../../components/home-components/featured-title/featured-title.component";
import { ProductListComponent } from "../../components/home-components/product-list/product-list.component";
import { HeroComponent } from "../../components/home-components/hero/hero.component";


@Component({
  selector: 'app-home',
  imports: [FeaturedTitleComponent, ProductListComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
