import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Profesional } from './usuario.entity';
import { Casos } from 'src/casos/casos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesional, Casos])],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService]

})
export class ProfesionaloModule {}
