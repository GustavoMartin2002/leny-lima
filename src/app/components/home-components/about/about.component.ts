import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage, AccordionComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {

}