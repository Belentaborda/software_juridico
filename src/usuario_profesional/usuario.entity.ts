import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Casos } from 'src/casos/casos.entity';
import { Usuarios_Clientes } from 'src/usuario_cliente/usuario_cliente.entity';
import { Usuario } from 'src/usuarios/usuario.entity';

@Entity('profesional')
export class Profesional extends Usuario{
@Column({type: 'varchar', length: 255})
matricula: string
@Column({type: 'varchar', length: 255})
jurisdiccion: string
@OneToMany(()=> Casos, casos => casos.usuario)
casos: Casos[];

}