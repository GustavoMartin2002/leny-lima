import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavComponent } from "./templates/nav/nav.component";
import { FooterComponent } from "./templates/footer/footer.component";
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title = 'Leny Lima';
  loading: boolean = true;
  currentRoute = '';

  constructor(private route: Router){};

  ngOnInit(): void {
    this.route.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
    this.loading = false;
  }
}