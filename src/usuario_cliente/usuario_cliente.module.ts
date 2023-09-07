import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioClienteController } from './usuario_cliente.controller';
import { UsuarioClienteService } from './usuario_cliente.service';
import { Usuarios_Clientes } from './usuario_cliente.entity';
import { Casos } from 'src/casos/casos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios_Clientes, Casos])],
  controllers: [UsuarioClienteController],
  providers: [UsuarioClienteService],
  exports: [UsuarioClienteService]
})
export class UsuarioClienteModule {}
