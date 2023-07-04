import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Producto } from '../interfaces/Producto'


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  BASE_URL: string = '';

  constructor(private http: HttpClient) {
    this.BASE_URL = `http://localhost:3000/productos`
   }

  getProductos():Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/listProductos`)
  }

  insertProducto(product: Producto): Observable<any> {
    return this.http.post<Producto>(`${this.BASE_URL}/insertProducto`, product)
  }

  updateProduct(id: number, product: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.BASE_URL}/updateProducto?productID=${id}`, product);
  }

  deleteProduct(id : number): Observable<any> {
    return this.http.delete<Producto>(`${this.BASE_URL}/deleteProducto?${id}`);

  }
}