import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PoliticaPrivacidade } from './pages/politica-de-privacidade/politica-de-privacidade.component';
import { TermosCondicoes } from './pages/termos-e-condicoes/termos-e-condicoes.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FlorescerStartComponent } from './pages/florescer-start/florescer-start.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        title: 'Leny Lima - Mentora de Autoconhecimento',
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
        title: 'Política de Privacidade | Leny Lima',
    },
    {
        path: 'termos-e-condicoes',
        component: TermosCondicoes,
        title: 'Termos e Condições | Leny Lima',
    },
    {
        path: 'florescer_start',
        component: FlorescerStartComponent,
        title: 'Florescer Start | Leny Lima',
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'Página Não Encontrada | Leny Lima',
    },
];