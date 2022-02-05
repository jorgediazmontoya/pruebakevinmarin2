import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Sucursal } from "./Sucursal";

@Entity()
export class Medico {

    @PrimaryGeneratedColumn()
    codigoMedico: number;

    @Column({
        type: 'varchar',
        nullable: false
    })
    tipoIdentificacion: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    numeroIdentificacion: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    primerNombre: string;
    
    @Column({
        type: 'varchar',
        nullable: false
    })
    segundoNombre: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    primerApellido: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    segundoApellido: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    nombreCompleto: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    mail: string;

    @Column({
        type: 'date',
        nullable: false
    })
    fechaNacimiento: Date;

    @Column({
        type: 'number',
        nullable: false
    })
    sueldo: number;

    @Column({
        type: 'varchar',
        nullable: false
    })
    sexo: string;

    @ManyToOne(() => Sucursal, sucursal => sucursal.medicos)
    sucursal: Sucursal;
}