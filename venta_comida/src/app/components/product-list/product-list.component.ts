import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Producto } from 'src/app/interfaces/Producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
  this.productService.getProductos()
    .subscribe(
      res => {this.productos = res.data
      console.log(res.data);
      }
    )
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
    .subscribe(
        res => {this.getProductos()
        }
    )
  }

}