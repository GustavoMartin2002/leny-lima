import { Component, Input, OnInit } from '@angular/core';
import { BtnVagaComponent } from "../btn-vaga/btn-vaga.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-card',
  imports: [BtnVagaComponent, CommonModule],
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.scss'
})
export class PaymentCardComponent implements OnInit{
  isLoading:boolean = false
  @Input() value_through!: string;
  @Input() parcel_value!: string;
  @Input() cash_value!: string;
  @Input() payment_link!: string;
  @Input() encounters!: string;

  ngOnInit(): void {
    this.isLoading = false
  }
}
