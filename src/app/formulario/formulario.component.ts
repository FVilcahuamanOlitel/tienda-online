import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-formulario',
  imports: [],
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  @ViewChild('descripcionInput') descripcionInput!: ElementRef;
  @ViewChild('precioInput') precioInput!: ElementRef;
  @Output() nuevoProducto = new EventEmitter<Producto>();

  agregarProducto(evento: Event){
    evento.preventDefault();

    if(this.descripcionInput.nativeElement.value.trim() === ''
      || this.precioInput == null || this.precioInput.nativeElement.value <=0){
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.descripcionInput.nativeElement.value, this.precioInput.nativeElement.value);

    this.nuevoProducto.emit(producto);

    this.descripcionInput.nativeElement.value = '';
    this.precioInput.nativeElement.value = null;
  }
}
