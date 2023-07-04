import { Inject, Injectable } from '@nestjs/common';
import { Productos } from 'src/models/productos.entity';
import { ProductosDto } from '../modules/dto/productos.dto';
import { ProductosUpdateDto } from '../modules/dto/productosUpdate.dto';
import { ProductosDeleteDto } from '../modules/dto/productosDelete.dto';

@Injectable()
export class ProductosService {
  constructor(
    @Inject('PRODUCTOS_REPOSITORY')
    private readonly productosRepository: Productos,
  ) {}


  async listProducto(id:number): Promise<Productos[]> {
    try {
        return await this.productosRepository.sequelize.query(
          `
            SELECT * FROM venta_comida_gato
            WHERE "id_producto"=:id::integer;
          `,
          {
            model: Productos,
            mapToModel:true,
            replacements:{
              id
            }
          }
        )
    } catch (err) {
            throw err;
      }
  }

  async listProductos(): Promise<Productos[]> {
    try {
        return await this.productosRepository.sequelize.query(
          `
            SELECT * FROM venta_comida_gato;
          `,
          {
            model: Productos,
            mapToModel:true
          }
        )
    } catch (err) {
            throw err;
      }
  }

  async insertProducto(producto: ProductosDto): Promise<any> {
    try {
        return await this.productosRepository.sequelize.query(
          `
            INSERT INTO public.venta_comida_gato(
              "nombre_producto", "valor_unitario", 
              "cantidad")
            VALUES (:nombre::varchar, :valor::integer, :cantidad::integer)
          `,
          {
            model: Productos,
            mapToModel:true,
            replacements: {
              nombre: producto.nombre_producto,
              valor: producto.valor_unitario,
              cantidad: producto.cantidad
            }
          }
        )
    } catch (err) {
            throw err;
      }
  }

  async updateProducto(producto: ProductosUpdateDto): Promise<any> {
    try {
        return await this.productosRepository.sequelize.query(
          `
            UPDATE venta_comida_gato SET
                "valor_unitario"=:valor::integer,
                "cantidad"=:cantidad::integer
            WHERE "id_producto"=:id::integer;
          `,
          {
            model: Productos,
            mapToModel:true,
            replacements: {
              valor: producto.valor,
              cantidad: producto.cantidad,
              id: producto.id
            }
          }
        )
    } catch (err) {
            throw err;
      }
  }


  async deleteProducto(producto: ProductosDeleteDto): Promise<any> {
    try {
        return await this.productosRepository.sequelize.query(
          `
            DELETE FROM venta_comida_gato WHERE
            "id_producto"=:id::integer


          `,
          {
            model: Productos,
            mapToModel:true,
            replacements: {
              id: producto.id
            }
          }
        )
    } catch (err) {
            throw err;
      }
  }
}
