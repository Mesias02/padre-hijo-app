import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() mensaje: string = '';
  @Output() mensajeEvent = new EventEmitter<string>();

  enviarMensaje() {
    this.mensajeEvent.emit("¡Hola desde el hijo!");
  }
}
