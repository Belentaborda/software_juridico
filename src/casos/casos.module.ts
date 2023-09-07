import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CasosService } from './casos.service';
import { CasosController } from './casos.controller';
import { Profesional } from 'src/usuario_profesional/usuario.entity';
import { Casos } from './casos.entity';
import { Usuarios_Clientes } from 'src/usuario_cliente/usuario_cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Casos, Profesional, Usuarios_Clientes])],
  providers: [CasosService],
  controllers: [CasosController],
  exports: [CasosService]
})
export class CasosModule {}
