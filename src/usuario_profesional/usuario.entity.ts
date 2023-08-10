import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Casos } from 'src/casos/casos.entity';
import { Usuarios_Clientes } from 'src/usuario_cliente/usuario_cliente.entity';

@Entity('usuario_profesional')
export class Usuario{
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
matricula: string
@Column({type: 'varchar', length: 255})
jurisdiccion: string
@Column({type: 'varchar', length: 255})
CUIT: number
@OneToMany(()=> Casos, casos => casos.usuario)
casos: Casos[];

}