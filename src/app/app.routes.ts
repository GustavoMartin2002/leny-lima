import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PoliticaPrivacidade } from './pages/politica-de-privacidade/politica-de-privacidade.component';
import { TermosCondicoes } from './pages/termos-e-condicoes/termos-e-condicoes.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'inicio',
        redirectTo: '#inicio',
    },
    {
        path: 'sobre',
        redirectTo: '#sobre',
    },
    {
        path: 'mentorias',
        redirectTo: '#mentorias',
    },
    {
        path: 'historico',
        redirectTo: '#historico',
    },
    {
        path: 'contato',
        redirectTo: '#contato',
    },
    {
        path: 'florescer_premium',
        redirectTo: '#florescer_premium',
    },
    {
        path: 'politica-de-privacidade',
        component: PoliticaPrivacidade,
    },
    {
        path: 'termos-e-condicoes',
        component: TermosCondicoes,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];