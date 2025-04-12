import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FooterComponent } from "./templates/footer/footer.component";
import { NavComponent } from "./templates/nav/nav.component";
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'myApp'
  currentRoute = ''

  constructor(private route: Router){}

  ngOnInit(): void {
    this.route.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }
}