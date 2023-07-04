import { Sequelize } from 'sequelize-typescript';
import { Productos } from 'src/models/productos.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'containers-us-west-103.railway.app',
        port: 7592,
        username: 'postgres',
        password: 'QjtFHLvY0B3qN8IfIPXP',
        database: 'Prueba',
      });
      sequelize.addModels([Productos]);
      //await sequelize.sync();
      return sequelize;
    },
  },
];