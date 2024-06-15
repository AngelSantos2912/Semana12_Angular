import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-prueba-amaterial',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './prueba-amaterial.component.html',
  styleUrl: './prueba-amaterial.component.css'
})
export class PruebaAmaterialComponent {

}
