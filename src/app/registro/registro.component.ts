import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Usuario {
  nombre: string;
  correo: string;
  telefono: string;
  edad: number | null;
  password: string;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {
  usuario: Usuario = { nombre: '', correo: '', telefono: '', edad: null, password: '' };

  registrados: Usuario[] = [];
  enviado = false;

  registrar(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched(); // por seguridad, muestra todos los errores
      return;
    }

    this.registrados.push({ ...this.usuario });
    console.log('Usuario registrado:', this.usuario);

    this.enviado = true;
    form.resetForm(); // limpia valores y estados (touched, dirty)
    setTimeout(() => (this.enviado = false), 4000);
  }
}
