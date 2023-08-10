import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario_profesional/usuario.module';
import { CasosModule } from './casos/casos.module';
import { UsuarioClienteModule } from './usuario_cliente/usuario_cliente.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'software_juridico',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),   
    UsuarioModule, CasosModule, UsuarioClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
