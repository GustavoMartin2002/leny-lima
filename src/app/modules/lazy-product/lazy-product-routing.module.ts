import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from '../../pages/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: ProductPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyProductRoutingModule { }
