import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Casos } from 'src/casos/casos.entity';
import { Usuario } from 'src/usuario_profesional/usuario.entity';

@Entity('usuario_clientes')
export class Usuarios_Clientes{
@PrimaryGeneratedColumn() 
id: number;
@Column({type: 'varchar', length: 255, })
nombres: string
@Column({type: 'varchar', length: 255})
apellido: string
@Column({type: 'varchar', length: 255})
DNI: number;
@Column({type: 'varchar', length: 255, nullable: false})
email: string
@Column({type: 'varchar', length: 128, nullable: false})
password: string
@Column({type: 'varchar', length: 255})
CUIT: number;
@ManyToMany(()=> Casos, casos => casos.usuariosClientes)
casos: Casos[];
}