import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Profesional } from './usuario.entity';
import { Repository } from 'typeorm';
import { Casos } from 'src/casos/casos.entity';
import { crearUsuarioProfesionalDto } from './Dto/crear-usuario-profesional.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Profesional)
    private readonly usuarioRepository: Repository<Profesional>,

    @InjectRepository(Casos) private readonly casosRepository: Repository<Casos>,
  ) {}

  async crearUusarioProfesional(usuarioProfesional : crearUsuarioProfesionalDto){
    const usuarioProfesionalEncontrado = await this.usuarioRepository.findOne({
      where:{
        email: usuarioProfesional.email,
      }
    });

    if(usuarioProfesionalEncontrado){
      return new HttpException('Este usuario ya existe. Si olvido su contraseña por favor intente recuperarla', HttpStatus.CONFLICT);
    }
    const nuevoCaso = this.usuarioRepository.create(usuarioProfesional);
    return this.usuarioRepository.save(nuevoCaso);
  }
}
