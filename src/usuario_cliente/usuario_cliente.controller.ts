import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioClienteService } from './usuario_cliente.service';
import { CrearUsuarioClienteDto } from './Dto/crear-usuario-cliente.dto';

@Controller('usuario-cliente')
export class UsuarioClienteController {
    constructor(private readonly usuarioClienteService: UsuarioClienteService){}

    @Post('/create-usuario-cliente')
    crearUusarioCliente(@Body() usuarioCliente: CrearUsuarioClienteDto){
        return this.usuarioClienteService.crearUsuarioCliente(usuarioCliente);
    }
}
