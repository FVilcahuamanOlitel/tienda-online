import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule],
  templateUrl: './listado-productos.component.html'
})
export class ListadoProductosComponent {
  productos: Producto[] = [
    new Producto('Pantalón', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0),
  ];

  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto() {
    if (this.descripcionInput.trim() === '' || this.precioInput == null ||
        this.precioInput <= 0) {
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(producto);

    this.descripcionInput = '';
    this.precioInput = 0;
  }
}
