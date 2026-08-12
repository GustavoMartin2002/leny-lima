const fs = require('fs');

let html = fs.readFileSync('code.html', 'utf8');

// Extract the main content (between <main> and <footer>)
let mainContentMatch = html.match(/<main[\s\S]*?<\/main>/);
let mainContent = mainContentMatch ? mainContentMatch[0] : '';
let proofsMatch = html.match(/<section id="provas-sociais"[\s\S]*?<\/section>/);
let offerMatch = html.match(/<section id="oferta-final"[\s\S]*?<\/section>/);

let finalHtml = mainContent + '\n' + (proofsMatch ? proofsMatch[0] : '') + '\n' + (offerMatch ? offerMatch[0] : '');

// Replace specific colors
const colors = ['primary-container', 'on-primary-container', 'primary-fixed', 'on-primary-fixed-variant', 'on-primary-fixed', 'on-primary', 'primary', 'surface-bright', 'surface-container-highest', 'surface-container-high', 'surface-container-lowest', 'surface-container-low', 'surface-container', 'surface-dim', 'surface-tint', 'surface-variant', 'surface', 'on-surface-variant', 'on-surface', 'tertiary-container', 'on-tertiary-container', 'on-tertiary-fixed-variant', 'on-tertiary-fixed', 'on-tertiary', 'tertiary-fixed-dim', 'tertiary-fixed', 'tertiary', 'secondary-container', 'on-secondary-container', 'on-secondary-fixed-variant', 'on-secondary-fixed', 'on-secondary', 'secondary-fixed-dim', 'secondary-fixed', 'secondary', 'inverse-surface', 'inverse-on-surface', 'inverse-primary', 'muted-gold', 'deep-onyx', 'soft-sand', 'outline-variant', 'outline', 'background', 'on-background', 'error-container', 'on-error-container', 'on-error', 'error'];

colors.forEach(c => {
    let regex = new RegExp('([\\s"\'])((?:text|bg|border|from|via|to|shadow|fill|stroke)-)' + c + '(?=[\\s"\'/])', 'g');
    finalHtml = finalHtml.replace(regex, '$1$2fs-' + c);
});

// Also replace fonts
const fonts = ['label-caps', 'headline-xl', 'body-md', 'button', 'headline-md', 'headline-lg', 'body-lg', 'headline-xl-mobile'];
fonts.forEach(f => {
    let regex = new RegExp('([\\s"\'])((?:font|text)-)' + f + '(?=[\\s"\'/])', 'g');
    finalHtml = finalHtml.replace(regex, '$1$2fs-' + f);
});

// Create dir if not exists
if (!fs.existsSync('src/app/pages/florescer-start')){
    fs.mkdirSync('src/app/pages/florescer-start', { recursive: true });
}

fs.writeFileSync('src/app/pages/florescer-start/florescer-start.component.html', finalHtml);
console.log('HTML written.');
