import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  productoId: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;

  constructor(
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const producto = this.productoService.getProductoById(Number(id));
      if (producto) {
        this.productoId = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
      }
    }
  }

  guardarProducto(evento: Event) {
    evento.preventDefault();

    if(this.descripcionInput.trim() === ''
      || this.precioInput == null || this.precioInput <=0){
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.productoId, this.descripcionInput, this.precioInput);
    this.productoService.guardarProducto(producto);

    this.limpiarFormulario();

    this.router.navigate(['/']);
  }

  eliminarProducto() {
    if (this.productoId !== null) {
      this.productoService.eliminarProducto(this.productoId);
      this.limpiarFormulario();
      this.router.navigate(['/']);
    }
  }

  cancelar() {
    this.router.navigate(['/']);
  }

  limpiarFormulario() {
    this.productoId = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
