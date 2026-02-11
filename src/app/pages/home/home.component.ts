import { Component } from "@angular/core";
import { HeroComponent } from "../../components/home-components/hero/hero.component";
import { AboutComponent } from "../../components/home-components/about/about.component";
import { MentoringComponent } from "../../components/home-components/mentoring/mentoring.component";
import { HistoryComponent } from "../../components/home-components/history/history.component";
import { ContactComponent } from "../../components/home-components/contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, MentoringComponent, HistoryComponent, ContactComponent],
  templateUrl: './home.component.html',
})

export class HomeComponent {

}