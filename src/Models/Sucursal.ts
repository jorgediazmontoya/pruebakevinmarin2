import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Medico } from "./Medico";

@Entity()
export class Sucursal {

    @PrimaryGeneratedColumn()
    codigoSucursal: number;

    @Column({
        type: 'varchar',
        nullable: false
    })
    codigoEmpresa: number;

    @Column({
        type: 'varchar',
        nullable: false
    })
    nombreSucursal: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    region: string;
    
    @Column({
        type: 'varchar',
        nullable: false
    })
    usuarioRegistro: string;

    @Column({
        type: 'date',
        nullable: false
    })
    fechaRegistro: Date;

    @OneToMany(() => Medico, medico => medico.sucursal)
    medicos: Medico[];
}