import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  {
    path: 'listProductos',
    component: ProductListComponent
  },

  {
    path: 'productos/listProductos',
    component: ProductListComponent
  },

  {
    path: 'productos/insertProducto',
    component: ProductFormComponent
  },

  {
    path: 'productos/updateProducto/:id',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
