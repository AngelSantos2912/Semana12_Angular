import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MaterialModule } from '../angular-material/material/material.module';
//-------------------------------------------------------------------//


//----------------------------------------------------------------//
@Component({
  selector: 'app-prueba-amaterial',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './prueba-amaterial.component.html',
  styleUrl: './prueba-amaterial.component.css'
})
export class PruebaAmaterialComponent {

}
//---------------------------------------------------//


