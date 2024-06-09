import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [CommonModule, HijoComponent], // Importar HijoComponent
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  mensajeParaHijo: string = "RESULTADO DEL ENCUENTRO ARGENTINA VS FRANCIA FINAL DE LA COPA 2022";
  mensajeDelHijo: string = "";

  recibirMensaje(mensaje: string) {
    this.mensajeDelHijo = mensaje;
  }
}
