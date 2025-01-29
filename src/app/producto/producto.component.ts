import { Component, Input } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html'
})
export class ProductoComponent {
  @Input() producto!: Producto;
}
