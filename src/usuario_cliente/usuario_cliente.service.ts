import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios_Clientes } from './usuario_cliente.entity';
import { Casos } from 'src/casos/casos.entity';
import { CrearUsuarioClienteDto } from './Dto/crear-usuario-cliente.dto';

@Injectable()
export class UsuarioClienteService {
  constructor(
    @InjectRepository(Usuarios_Clientes)
    private readonly UsuariosClienteRepository: Repository<Usuarios_Clientes>,
    @InjectRepository(Casos) private readonly casosRepository: Repository<Casos>,
  ) {}

async crearUsuarioCliente(usuarioCliente : CrearUsuarioClienteDto){
    const usuarioClienteEncontrado = await this.UsuariosClienteRepository.findOne({
        where:{
            email: usuarioCliente.email,
        }
    });
    if (usuarioClienteEncontrado){
        return new HttpException('Este usuario ya existe Si olvido su contraseña por favor intente recuperarla', HttpStatus.CONFLICT);
    }

    const nuevoCaso = this.UsuariosClienteRepository.create(usuarioCliente);
    return this.UsuariosClienteRepository.save(nuevoCaso);
}

}
