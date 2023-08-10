import { Usuarios_Clientes } from 'src/usuario_cliente/usuario_cliente.entity';
import { Usuario } from 'src/usuario_profesional/usuario.entity';
import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';


@Entity('casos')
export class Casos{
    @PrimaryGeneratedColumn() 
    id: number;
    @Column({type: 'varchar', length: 255, })
    nombres: string
    @Column({type: 'varchar', length: 255})
    apellido: string
    @Column({type: 'varchar', length: 255})
    DNI: number;
    @Column({type: 'varchar', length: 255})
    email: string
    @Column({type: 'varchar', length: 255})
    numeroCaso: number;
    @ManyToOne(()=> Usuario, usuario => usuario.casos)
    usuario: Usuario;
    @ManyToMany(()=> Usuarios_Clientes, usuariosClientes => usuariosClientes.casos)
    usuariosClientes: Usuarios_Clientes;
}
