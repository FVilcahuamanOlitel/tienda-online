import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url = ''; // url de Realtime Database FireBase

  constructor(private httpClient: HttpClient) { }

  listarProductos(): Observable<{[llave: string]: Producto}> {
    return this.httpClient.get<{[llave: string]: Producto}>(this.url + 'datos.json');
  }

  agregarProducto(producto: Producto): Observable<any> {
    return this.httpClient.post(this.url + 'datos.json', producto);
  }

  modificarProducto(producto: Producto, llave: string): Observable<any> {
    const url_modificar = `${this.url}datos/${llave}.json`;
    return this.httpClient.put(url_modificar, producto);
  }

  eliminarProducto(llave: string): Observable<any> {
    const url_eliminar = `${this.url}datos/${llave}.json`;
    return this.httpClient.delete(url_eliminar);
  }
}
