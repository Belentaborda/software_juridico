import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CasosService } from './casos.service';
import {crearCasosDto} from './Dto/crearCasosDto.dto';



@Controller('casos')
export class CasosController {
    constructor(private readonly casosService: CasosService){}

    @Post('/create-casos')
    crearCasos(@Body() caso: crearCasosDto) { 
        return this.casosService.crearCasos(caso);
    }

    @Get(':id')
    getMascota(@Param('id') id:number){
        return this.casosService.getCasos(id);
    }

    @Get()
    listarCasos(){
        return this.casosService.listadoCasos();
    }
}
