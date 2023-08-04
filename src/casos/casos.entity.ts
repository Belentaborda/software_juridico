import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity('casos')
export class casos{
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
    numeroCaso
    
}
