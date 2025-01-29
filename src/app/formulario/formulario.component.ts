import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(
    private productoService: ProductoService
  ){}
  agregarProducto(){
    if(this.descripcionInput.trim() === ''
      || this.precioInput == null || this.precioInput <=0){
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productoService.agregarProducto(producto);

    this.descripcionInput = '';
    this.precioInput = null;
  }
}
