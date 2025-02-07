import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from "../producto/producto.component";
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  imports: [FormsModule, ProductoComponent],
  templateUrl: './listado-productos.component.html'
})
export class ListadoProductosComponent {
  productos: {[llave: string]: Producto} = {};
  productosSubcription: Subscription | null = null;

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarProductos();
  
    this.productosSubcription = this.productoService.productosActualizados.subscribe((productos) => {
      this.productos = productos;
    });
  }

  cargarProductos() {
    this.productoService.listarProducto().subscribe((productos: {[llave: string]: Producto}) => {
      this.productos = productos;
      this.productoService.setProductos(productos);
    });
  }

  obtenerLlaves(): string[]{
    if (this.productos) {
      return Object.keys(this.productos);
    }
    return [];
  }

  agregarProducto() {
    this.router.navigate(['agregar']);
  }

  ngOnDestroy(): void {
    if (this.productosSubcription != null) {
      this.productosSubcription.unsubscribe();
    }
  }
}
