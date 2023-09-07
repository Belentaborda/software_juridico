import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Casos } from 'src/casos/casos.entity';
import { Profesional } from 'src/usuario_profesional/usuario.entity';
import { Usuario } from 'src/usuarios/usuario.entity';

@Entity('clientes')
export class Usuarios_Clientes extends Usuario{

@Column({type: 'varchar', length: 255})
CUIT: number;
@OneToMany(()=> Casos, casos => casos.usuarioCliente)
casos: Casos[];
}