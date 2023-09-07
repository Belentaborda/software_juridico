import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Casos } from './casos.entity';
import { Repository } from 'typeorm';
import { Profesional } from 'src/usuario_profesional/usuario.entity';
import { Usuarios_Clientes } from 'src/usuario_cliente/usuario_cliente.entity';
import { crearCasosDto } from './Dto/crearCasosDto.dto';

@Injectable()
export class CasosService {
  constructor(
    @InjectRepository(Casos)
    private readonly casosRepository: Repository<Casos>,
    @InjectRepository(Profesional)
    private readonly usuarioRepository: Repository<Profesional>,
    @InjectRepository(Usuarios_Clientes)
    private readonly usuarioClienteRepository: Repository<Usuarios_Clientes>,
  ) {}

  async crearCasos(casos: crearCasosDto) {
    const casoEncontrado = await this.casosRepository.findOne({
      where: {
        numeroCaso: casos.numeroCaso,
      },
    });
    if (casoEncontrado) {
      return new HttpException(
        'Este numero de caso ya existe',
        HttpStatus.CONFLICT,
      );
    }
    const usuarioEncontrado = await this.usuarioRepository.findOne({
      where: {
        id: casos.usuarioID && casos.usuarioClienteID,
      },
    });
    if (!usuarioEncontrado) {
      return new HttpException('Este usuario no existe', HttpStatus.NOT_FOUND);
    }
    const usuarioEncontrado1 = await this.usuarioClienteRepository.findOne({
      where: {
        id:casos.usuarioClienteID,
      },
    });
    if (!usuarioEncontrado1) {
      return new HttpException('Este usuario no existe', HttpStatus.NOT_FOUND);
    }

//metodo para guardar el nuevo caso. 
//en este metodo faltaria el usuario cliente para encontrar y crear el caso

    const nuevoCaso = this.casosRepository.create(casos);
    nuevoCaso.usuario = usuarioEncontrado;
    return this.casosRepository.save(nuevoCaso);
  }

  async getCasos(id:number){
    const casoEncontrado = await this.casosRepository.findOne({
        where:{
            id,
        },
        relations: ['usuario', 'usuariosCliente']
    });
    return casoEncontrado;
}

listadoCasos(){
    return this.casosRepository.find({
        relations: ['usuario', 'usuariosCliente'],
    });
}
}
