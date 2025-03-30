import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./templates/footer/footer.component";
import { NavComponent } from "./templates/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myApp';
}