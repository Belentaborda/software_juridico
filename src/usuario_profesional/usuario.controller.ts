import { Controller } from '@nestjs/common';
import { UsuarioService } from './usuario.service';


@Controller('profesional')
export class UsuarioController {
    constructor(private readonly userService: UsuarioService){}
    
}
