import { Component, Input } from '@angular/core';
import { Producto } from '../models/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html'
})
export class ProductoComponent {
  @Input() producto!: Producto;

  constructor(private router: Router) {}

  editarProducto(id: number) {
    this.router.navigate(['/editar', id]);
  }
}
