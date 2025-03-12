import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneratorComponent } from './generator/generator.component';

@Component({
  selector: 'app-user-area',
  imports: [NavbarComponent,GeneratorComponent],
  templateUrl: './user-area.component.html',
  styleUrl: './user-area.component.scss'
})
export class UserAreaComponent {

}
