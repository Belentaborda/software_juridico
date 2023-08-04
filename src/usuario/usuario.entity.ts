import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity('usuarios')
export class usuarios{
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


}