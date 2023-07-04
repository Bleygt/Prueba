import { IsNumber, IsString } from "class-validator";

export class ProductosDto {
    @IsString()
    nombre_producto: string;
    @IsNumber()
    valor_unitario: number;
    @IsNumber()
    cantidad: number;
}