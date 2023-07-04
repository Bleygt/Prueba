import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Producto = {
    nombre_producto: "",
    valor_unitario: 0,
    cantidad: 0,
  };

  constructor(
    private productService: ProductService,
    private router: Router
    ) {}

  ngOnInit(): void {
    
  }

  submitProduct() {
    this.productService.insertProducto(this.product)
    .subscribe(
        res => console.log(res)
    )
  }

}