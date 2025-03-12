import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-subscription',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardFooter,
  ],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss'
})
export class SubscriptionComponent {

  subscriptionForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // this.subscriptionForm = this.fb.group({
    //   cardHolderName: ['', Validators.required],
    //   cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]], // Example pattern
    //   expiry: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])\/([2-9][0-9])')]], // Example pattern
    //   cvv: ['', [Validators.required, Validators.pattern('[0-9]{3,4}')]], // Example pattern
    //   country: ['', Validators.required]
    // });
    this.subscriptionForm = this.fb.group({
      cardHolderName: [''],
      cardNumber: [''], // Example pattern
      expiry: [''], // Example pattern
      cvv: [''], // Example pattern
      country: ['']
    });
  }

  onSubmit() {
    this.router.navigate(['/userarea']);
  }
}
