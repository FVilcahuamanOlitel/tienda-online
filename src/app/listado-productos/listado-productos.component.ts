import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from "../producto/producto.component";
import { FormularioComponent } from "../formulario/formulario.component"; 

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, ProductoComponent, FormularioComponent],
  templateUrl: './listado-productos.component.html'
})
export class ListadoProductosComponent {
  productos: Producto[] = [
    new Producto('Pantalón', 130.0),
    new Producto('Camisa', 80.0),
    new Producto('Playera', 50.0),
  ];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }
}
