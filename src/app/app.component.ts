import { Component } from '@angular/core';
import { RegistroComponent } from './registro/registro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroComponent],
  template: '<app-registro />',
})
export class AppComponent {}
