import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mentor',
  imports: [],
  templateUrl: './mentor.component.html',
  styleUrl: './mentor.component.scss'
})
export class MentorComponent {
 @Input() mentor!: string
 @Input() text!: string
}
