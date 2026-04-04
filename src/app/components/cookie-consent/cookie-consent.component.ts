import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (!hasConsented) {
      <div class="fixed bottom-0 left-0 w-full bg-base-100 text-base-content px-4 py-7 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-50 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-base-100">
        <div class="text-sm md:text-base">
          <p>
            Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego, em conformidade com a LGPD. Ao continuar navegando, você concorda com nossa <a href="/politica-de-privacidade" class="link font-bold">Política de Privacidade</a>.
          </p>
        </div>
        <div class="flex gap-4 shrink-0 mt-2 md:mt-0">
          <button (click)="decline()" class="btn btn-sm btn-base-300">Recusar Opcionais</button>
          <button (click)="accept()" class="btn btn-sm btn-primary">Aceitar Todos</button>
        </div>
      </div>
    }
  `,
})
export class CookieConsentComponent implements OnInit {
  hasConsented = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        // Exibe o banner apenas no cliente se não houver consentimento via localstorage
        this.hasConsented = false;
      } else if (consent === 'granted') {
        this.triggerDataLayerEvent();
      }
    }
  }

  accept() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookieConsent', 'granted');
      this.hasConsented = true;
      this.triggerDataLayerEvent();
    }
  }

  decline() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookieConsent', 'denied');
      this.hasConsented = true;
    }
  }

  private triggerDataLayerEvent() {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'cookie_consent_granted'
      });
    }
  }
}