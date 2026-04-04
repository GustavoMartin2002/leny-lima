export default function generateSitemapXml(baseUrl: string): string {
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

  const xml = 
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map((route) => {
      return `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    }).join('')}
    </urlset>
    `;

  return xml.trim();
}