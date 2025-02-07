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
  @Input() llave!: string;

  constructor(private router: Router) {}

  editarProducto() {
    this.router.navigate(['/editar', this.llave]);
  }
}
