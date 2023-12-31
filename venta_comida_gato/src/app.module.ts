import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './modules/productos.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ProductosModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
