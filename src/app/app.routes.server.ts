import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'termos-e-condicoes',
    renderMode: RenderMode.Server,
  },
  {
    path: 'politica-de-privacidade',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];