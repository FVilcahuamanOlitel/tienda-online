import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from "../producto/producto.component";
import { FormularioComponent } from "../formulario/formulario.component"; 
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, ProductoComponent, FormularioComponent],
  templateUrl: './listado-productos.component.html'
})
export class ListadoProductosComponent {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productos = this.productoService.productos;
  }
}
