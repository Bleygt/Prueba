import { Body, Controller, Delete, Get, HttpStatus, Post, Res, Put, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosDto } from '../modules/dto/productos.dto';
import { ProductosUpdateDto } from '../modules/dto/productosUpdate.dto';
import { ProductosDeleteDto } from '../modules/dto/productosDelete.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get("/listProducto/:id")
  async listProducto(@Res() res, @Param("id") id) {
    const productos = await this.productosService.listProducto(id);

    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data: productos,
      message: "Exitoso"
    })
  }

  @Get("/listProductos")
  async listProductos(@Res() res) {
    const productos = await this.productosService.listProductos();

    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data: productos,
      message: "Exitoso"
    })
  }
  
  @Post("/insertProducto")
  async insertProducto(@Res() res, @Body() producto: ProductosDto) {

    const insert = await this.productosService.insertProducto(producto);
  
    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data: insert,
      message: "Producto creado exitosamente"
      
    })
  }

  @Put("/updateProducto")
  async updateProducto(@Res() res, @Body() producto: ProductosUpdateDto) {

    const update = await this.productosService.updateProducto(producto);
  
    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data: update,
      message: "Producto actualizado exitosamente"
    })
  }

  @Delete("/deleteProducto")
  async deleteProducto(@Res() res, @Body() producto: ProductosDeleteDto) {

    const deletes = await this.productosService.deleteProducto(producto);
  
    return res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      data: deletes,
      message: "Producto eliminado exitosamente"
    })
  }

}
