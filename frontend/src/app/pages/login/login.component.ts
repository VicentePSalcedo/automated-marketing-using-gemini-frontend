import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private router: Router,
  ) {
    
  }
  login() {
    console.log('Login clicked');
    // Implement Facebook login logic here
    this.router.navigate(['/subscription'])
  }

  register() {
    console.log('Register clicked');
    // Implement registration logic here
    this.router.navigate(['/subscription'])
  }
}
