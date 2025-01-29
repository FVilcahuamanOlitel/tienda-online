import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html'
})
export class ProductoComponent {
  descripcion = 'Nuevo Producto'; 
  precio = 100.00; 
}
