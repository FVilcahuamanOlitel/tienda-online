import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from "../producto/producto.component";
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, ProductoComponent],
  templateUrl: './listado-productos.component.html'
})
export class ListadoProductosComponent {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productos = this.productoService.productos;
  }

  agregarProducto() {
    this.router.navigate(['agregar']);
  }
}
