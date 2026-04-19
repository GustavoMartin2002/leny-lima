import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseUrl = process.env['NG_APP_PUBLIC_URL'] || 'https://lenylima.vercel.app';
const routes = [
  '/',
  '/inicio',
  '/sobre',
  '/mentorias',
  '/historico',
  '/contato',
  '/florescer_premium',
  '/politica-de-privacidade',
  '/termos-e-condicoes',
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>
    <loc>${baseUrl}${route === '/' ? '' : route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xml.trim());
console.log('sitemap.xml generated in public/');
