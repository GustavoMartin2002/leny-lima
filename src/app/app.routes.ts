import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
        // loadChildren: () => import ('./modules/lazy-home/lazy-home.module').then(m => m.LazyHomeModule)
    },
    {
        path: 'produto/:id',
        loadChildren: () => import ('./modules/lazy-product/lazy-product.module').then(m => m.LazyProductModule)
    }
];

