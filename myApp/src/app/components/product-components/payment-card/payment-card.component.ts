import { Component, Input } from '@angular/core';
import { BtnVagaComponent } from "../btn-vaga/btn-vaga.component";

@Component({
  selector: 'app-payment-card',
  imports: [BtnVagaComponent],
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.scss'
})
export class PaymentCardComponent {
  @Input() value_through!: string;
  @Input() parcel_value!: string;
  @Input() cash_value!: string;
  @Input() payment_link!: string;
  @Input() encounters!: string;
}
