import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 


@Component({
  selector: 'app-subscription',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent {

  subscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subscriptionForm = this.fb.group({
      cardHolderName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]], // Example pattern
      expiry: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])\/([2-9][0-9])')]], // Example pattern
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3,4}')]], // Example pattern
      country: ['', Validators.required]
    });
  }

  onSubmit() {

  }
}
