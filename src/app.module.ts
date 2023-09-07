import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesionaloModule } from './usuario_profesional/usuario.module';
import { CasosModule } from './casos/casos.module';
import { UsuarioClienteModule } from './usuario_cliente/usuario_cliente.module';
import { Profesional } from './usuario_profesional/usuario.entity';
import { UsuariosModule } from './usuarios/usuarios.module';


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
    UsuariosModule, ProfesionaloModule, CasosModule, UsuarioClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
